import requests
from bs4 import BeautifulSoup
import re
import urllib3
from urllib.parse import urlparse, urljoin

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

SUSPICIOUS_KEYWORDS = ["slot", "gacor", "judi", "togel", "maxwin", "zeus", "pragmatic"]
MAX_PAGES_TO_SCAN = 5 

def fetch_url(url, headers):
    try:
        response = requests.get(url, headers=headers, timeout=5.0, verify=False)
        return response.text
    except Exception:
        return ""

def get_internal_links(base_url, html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    internal_links = set()
    base_domain = urlparse(base_url).netloc
    
    for a_tag in soup.find_all('a', href=True):
        href = a_tag['href']
        full_url = urljoin(base_url, href)
        parsed_full = urlparse(full_url)
        
        if parsed_full.netloc == base_domain and not full_url.endswith(('.png', '.jpg', '.jpeg', '.pdf', '.css', '.js', '.zip', '.rar')):
            clean_link = full_url.split('#')[0]
            internal_links.add(clean_link)
            
    return list(internal_links)

def scan_target(url: str):
    clean_base_url = url if url.startswith("http") else f"http://{url}"
    
    headers_googlebot = {"User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"}
    headers_desktop = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"}

    findings = []
    is_infected = False
    hidden_links_sample = []
    
    urls_to_scan = [clean_base_url]
    scanned_urls = set()
    
    while urls_to_scan and len(scanned_urls) < MAX_PAGES_TO_SCAN:
        current_url = urls_to_scan.pop(0)
        if current_url in scanned_urls: continue
        scanned_urls.add(current_url)
        
        googlebot_html = fetch_url(current_url, headers_googlebot)
        desktop_html = fetch_url(current_url, headers_desktop)
        
        if not googlebot_html or not desktop_html: continue

        soup_google = BeautifulSoup(googlebot_html, 'html.parser')
        text_content_google = soup_google.get_text().lower()
        
        found_keywords = [kw for kw in SUSPICIOUS_KEYWORDS if kw in text_content_google]
        if found_keywords:
            findings.append(f"[{current_url}] Ditemukan kata kunci injeksi: {', '.join(found_keywords)}")
            is_infected = True

        if len(googlebot_html) > len(desktop_html) + 3000:
            text_content_desktop = BeautifulSoup(desktop_html, 'html.parser').get_text().lower()
            desktop_keywords = [kw for kw in SUSPICIOUS_KEYWORDS if kw in text_content_desktop]
            if found_keywords and not desktop_keywords:
                findings.append(f"[{current_url}] Terindikasi SEO Cloaking (Konten judi hanya muncul untuk Mesin Pencari).")
                is_infected = True

        hidden_elements = soup_google.find_all(style=re.compile(r'display:\s*none|position:\s*absolute;\s*left:\s*-9999px', re.I))
        hidden_links = []
        for el in hidden_elements:
            for a in el.find_all('a', href=True):
                href = a['href'].lower()
                anchor_text = a.get_text().lower()
                if any(kw in href for kw in SUSPICIOUS_KEYWORDS) or any(kw in anchor_text for kw in SUSPICIOUS_KEYWORDS):
                    hidden_links.append(href)
        
        if hidden_links:
            findings.append(f"[{current_url}] Ditemukan tautan tersembunyi (Injeksi Link Spam).")
            is_infected = True
            hidden_links_sample.extend(hidden_links)
            
        if current_url == clean_base_url:
            internal_links = get_internal_links(clean_base_url, googlebot_html)
            urls_to_scan.extend([lnk for lnk in internal_links if lnk not in scanned_urls])

    unique_findings = list(set(findings))
    if not is_infected and not unique_findings:
        unique_findings.append(f"Telah memindai {len(scanned_urls)} halaman internal. Sistem bersih dari injeksi.")

    return {
        "is_infected": is_infected,
        "findings": unique_findings,
        "hidden_links_sample": hidden_links_sample[:3]
    }