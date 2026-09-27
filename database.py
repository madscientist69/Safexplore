import pymysql
import json
import logging
import os
from urllib.parse import urlparse

DB_HOST = "127.0.0.1"
DB_USER = "File ini hanya untuk keperluan demonstrasi lomba"
DB_PASS = "File ini hanya untuk keperluan demonstrasi lomba"
DB_NAME = "File ini hanya untuk keperluan demonstrasi lomba"

REGIONS = ["Sumatera", "Jawa", "Kalimantan", "Sulawesi", "Papua", "Maluku", "Bali & Nusa Tenggara"]

# --- MEMBACA KAMUS DOMAIN DARI JSON ---
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DOMAIN_FILE = os.path.join(BASE_DIR, 'domains.json')

try:
    with open(DOMAIN_FILE, 'r') as f:
        REGION_MAP_KEYWORDS = json.load(f)
except Exception as e:
    logging.error(f"Gagal membaca domains.json: {e}")
    # Fallback darurat jika file domains.json belum ada
    REGION_MAP_KEYWORDS = {"ugm": "Jawa", "unib": "Sumatera"} 

def guess_region(url: str) -> str:
    try:
        if not url.startswith("http"):
            url = "http://" + url
        domain = urlparse(url).netloc.split(":")[0].lower()
        
        for key, region in REGION_MAP_KEYWORDS.items():
            if key in domain:
                return region
    except Exception:
        pass
    return "Jawa"

def get_db_connection():
    return pymysql.connect(
        host=DB_HOST,
        user=DB_USER,
        password=DB_PASS,
        database=DB_NAME,
        connect_timeout=3,
        cursorclass=pymysql.cursors.DictCursor
    )

def init_db():
    try:
        conn = get_db_connection()
        with conn.cursor() as cursor:
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS scans (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    url TEXT NOT NULL,
                    is_infected BOOLEAN NOT NULL,
                    findings TEXT,
                    region VARCHAR(100),
                    scan_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            ''')
        conn.commit()
        conn.close()
    except Exception as e:
        logging.error(f"Gagal inisiasi database: {e}")

def save_scan(url: str, is_infected: bool, findings: list):
    try:
        conn = get_db_connection()
        region = guess_region(url)
        clean_url = url.replace("https://", "").replace("http://", "").replace("www.", "").strip("/")
        
        with conn.cursor() as cursor:
            cursor.execute("SELECT id FROM scans WHERE url LIKE %s", (f"%{clean_url}%",))
            existing_record = cursor.fetchone()
            
            if existing_record:
                cursor.execute(
                    """
                    UPDATE scans 
                    SET is_infected = %s, findings = %s, region = %s, scan_date = CURRENT_TIMESTAMP 
                    WHERE id = %s
                    """,
                    (is_infected, json.dumps(findings), region, existing_record['id'])
                )
            else:
                cursor.execute(
                    "INSERT INTO scans (url, is_infected, findings, region) VALUES (%s, %s, %s, %s)",
                    (url, is_infected, json.dumps(findings), region)
                )
        conn.commit()
        conn.close()
    except Exception as e:
        logging.error(f"Gagal menyimpan ke database: {e}")

def get_observatory_stats(filter_type="all"):
    # Gunakan pemisahan memori yang ketat agar tidak ada data bocor/kosong
    regions_data = {
        reg: {"score": 100, "infected": 0, "total": 0, "main_threat": "-", "status": "AMAN / HIJAU"}
        for reg in REGIONS
    }
    
    default_stats = {
        "national_index": 100,
        "total_scanned": 0,
        "threat_percentage": 0,
        "provinces_alert": 0,
        "regions": regions_data
    }

    try:
        conn = get_db_connection()
        
        domain_condition = ""
        if filter_type == "ac_id":
            domain_condition = "url LIKE '%.ac.id%'"
        elif filter_type == "sch_id":
            domain_condition = "url LIKE '%.sch.id%'"
            
        where_total = f"WHERE {domain_condition}" if domain_condition else ""
        where_infected = f"WHERE is_infected = 1 AND {domain_condition}" if domain_condition else "WHERE is_infected = 1"
        
        with conn.cursor() as cursor:
            cursor.execute(f"SELECT COUNT(DISTINCT url) as count FROM scans {where_total}")
            total_scans_result = cursor.fetchone()
            total_scans = int(total_scans_result['count']) if total_scans_result else 0
            
            cursor.execute(f"SELECT COUNT(DISTINCT url) as count FROM scans {where_infected}")
            infected_scans_result = cursor.fetchone()
            infected_scans = int(infected_scans_result['count']) if infected_scans_result else 0
            
            threat_percentage = int((infected_scans / total_scans) * 100) if total_scans > 0 else 0
            national_index = 100 - threat_percentage
            
            cursor.execute(f"""
                SELECT region, 
                       COUNT(DISTINCT url) as total, 
                       COUNT(DISTINCT CASE WHEN is_infected = 1 THEN url END) as infected
                FROM scans 
                {where_total}
                GROUP BY region
            """)
            region_rows = cursor.fetchall()
            
            provinces_alert = 0
            
            # --- PARSER KEBAL PELURU (BULLETPROOF) ---
            for row in region_rows:
                raw_region = row.get("region", "")
                if not raw_region:
                    continue
                
                # 1. Bersihkan string dari spasi tersembunyi
                reg_name = str(raw_region).strip()
                
                # 2. Cari kecocokan kunci dengan mengabaikan huruf besar/kecil
                matched_key = None
                for r in REGIONS:
                    if r.lower() == reg_name.lower():
                        matched_key = r
                        break
                        
                if not matched_key:
                    continue
                
                # 3. Paksa ubah angka dari MySQL menjadi format Integer Python yang valid
                try:
                    reg_total = int(row.get("total", 0) or 0)
                    reg_infected = int(row.get("infected", 0) or 0)
                except ValueError:
                    reg_total = 0
                    reg_infected = 0
                
                reg_threat = int((reg_infected / reg_total) * 100) if reg_total > 0 else 0
                reg_score = 100 - reg_threat
                
                if reg_score < 60:
                    status = "BAHAYA / MERAH"
                    provinces_alert += 1
                elif reg_score < 80 or reg_infected > 0:
                    status = "WASPADA / KUNING"
                    provinces_alert += 1
                else:
                    status = "AMAN / HIJAU"
                    
                # 4. Suntikkan data asli ke dalam kamus yang akan dikirim ke frontend
                regions_data[matched_key] = {
                    "score": reg_score,
                    "infected": reg_infected,
                    "total": reg_total,
                    "main_threat": "Injeksi Keyword Slot & Togel" if reg_infected > 0 else "Sistem Bersih",
                    "status": status
                }
            
            conn.close()
            
            return {
                "national_index": national_index,
                "total_scanned": total_scans,
                "threat_percentage": threat_percentage,
                "provinces_alert": provinces_alert,
                "regions": regions_data
            }
            
    except Exception as e:
        logging.error(f"Gagal mengambil data observatory: {e}")
        return default_stats