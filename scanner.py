import requests
from bs4 import BeautifulSoup
import re
import urllib3
from urllib.parse import urlparse, urljoin

# Nonaktifkan peringatan InsecureRequestWarning jika web target tidak memiliki SSL (verify=False)
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

SUSPICIOUS_KEYWORDS = ["slot", "gacor", "judi", "togel", "maxwin"]
MAX_PAGES_TO_SCAN = 5  # Batas maksimal halaman yang discan agar cPanel tidak Timeout/Error 504

def fetch_url(url, headers):
    try:
        # Menggunakan requests alih-alih httpx (Batas timeout diturunkan sedikit agar cepat)
        response = requests.get(url, headers=headers, timeout=5.0, verify=False)
        return response.text
    except Exception as e:
        return ""

def get_internal_links(base_url, html_content):
    """Mengekstrak semua tautan internal dari halaman utama"""
    soup = BeautifulSoup(html_content, 'html.parser')
    internal_links = set()
    base_domain = urlparse(base_url).netloc
    
    for a_tag in soup.find_all('a', href=True):
        href = a_tag['href']
        full_url = urljoin(base_url, href)
        
        parsed_full = urlparse(full_url)
        # Pastikan domainnya sama dan bukan file statis (gambar, pdf, dll)
        if parsed_full.netloc == base_domain and not full_url.endswith(('.png', '.jpg', '.jpeg', '.pdf', '.css', '.js', '.zip', '.rar')):
            clean_link = full_url.split('#')[0] # Hilangkan anchor (#)
            internal_links.add(clean_link)
            
    return list(internal_links)

def scan_target(url: str):
    # Pastikan URL memiliki format yang benar
    clean_base_url = url if url.startswith("http") else f"http://{url}"
    
    headers_googlebot = {"User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"}
    headers_desktop = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"}

    findings = []
    is_infected = False
    hidden_links_sample = []
    
    # Antrean URL yang akan discan (dimulai dari halaman utama)
    urls_to_scan = [clean_base_url]
    scanned_urls = set()
    
    # Looping Crawler: Berjalan selama masih ada antrean & belum menyentuh batas maksimal
    while urls_to_scan and len(scanned_urls) < MAX_PAGES_TO_SCAN:
        current_url = urls_to_scan.pop(0)
        
        if current_url in scanned_urls:
            continue
            
        scanned_urls.add(current_url)
        
        # Eksekusi secara sinkron
        googlebot_html = fetch_url(current_url, headers_googlebot)
        desktop_html = fetch_url(current_url, headers_desktop)
        
        if not googlebot_html or not desktop_html:
            continue

        soup_google = BeautifulSoup(googlebot_html, 'html.parser')
        
        # 1. Deteksi SEO Cloaking berbasis perbedaan ukuran
        if len(googlebot_html) > len(desktop_html) + 2000:
            findings.append(f"[{current_url}] Terindikasi SEO Cloaking (Perbedaan ukuran konten signifikan).")
            is_infected = True

        # 2. Deteksi Kata Kunci
        text_content = soup_google.get_text().lower()
        found_keywords = [kw for kw in SUSPICIOUS_KEYWORDS if kw in text_content]
        if found_keywords:
            findings.append(f"[{current_url}] Ditemukan kata kunci injeksi: {', '.join(found_keywords)}")
            is_infected = True

        # 3. Deteksi Tautan Tersembunyi (Hidden Elements)
        hidden_elements = soup_google.find_all(style=re.compile(r'display:\s*none|position:\s*absolute;\s*left:\s*-9999px', re.I))
        hidden_links = [a.get('href') for el in hidden_elements for a in el.find_all('a') if a.get('href')]
        
        if hidden_links:
            findings.append(f"[{current_url}] Ditemukan tautan tersembunyi (Indikasi manipulasi SEO).")
            is_infected = True
            hidden_links_sample.extend(hidden_links)
            
        # Jika ini adalah halaman utama, kumpulkan link internalnya untuk discan selanjutnya
        if current_url == clean_base_url:
            internal_links = get_internal_links(clean_base_url, googlebot_html)
            urls_to_scan.extend([lnk for lnk in internal_links if lnk not in scanned_urls])

    # Hapus duplikat pesan jika ada
    unique_findings = list(set(findings))
    
    # Jika sistem bersih, beri laporan jumlah halaman yang berhasil discan
    if not is_infected and not unique_findings:
        unique_findings.append(f"Telah memindai {len(scanned_urls)} halaman internal. Sistem bersih dari injeksi.")

    return {
        "is_infected": is_infected,
        "findings": unique_findings,
        "hidden_links_sample": hidden_links_sample[:3]
    }