import socket
from urllib.parse import urlparse
from flask import Flask, request, jsonify
from flask_cors import CORS

from scanner import scan_target
from remediation import generate_htaccess_fix
from database import init_db, save_scan, get_observatory_stats

init_db()

app = Flask(__name__)
CORS(app)

def is_valid_domain(url: str) -> bool:
    if not url.startswith("http://") and not url.startswith("https://"):
        url = "http://" + url
    
    domain = urlparse(url).netloc
    domain = domain.split(":")[0]
    
    if not domain:
        domain = url.replace("http://", "").replace("https://", "").split("/")[0]
        
    try:
        socket.gethostbyname(domain)
        return True
    except socket.error:
        return False

@app.route("/api/scan", methods=["POST"])
def run_scan():
    data = request.get_json() or {}
    target_url = data.get("url", "")
    
    if not is_valid_domain(target_url):
        return jsonify({
            "url_scanned": target_url,
            "status": "Invalid Domain",
            "details": {"findings": []},
            "remediation_script": ""
        })

    scan_result = scan_target(target_url)
    remediation_script = generate_htaccess_fix(scan_result["is_infected"])
    
    save_scan(
        url=target_url,
        is_infected=scan_result["is_infected"],
        findings=scan_result["findings"]
    )
    
    return jsonify({
        "url_scanned": target_url,
        "status": "Infected" if scan_result["is_infected"] else "Safe",
        "details": scan_result,
        "remediation_script": remediation_script
    })

@app.route("/api/observatory", methods=["GET"])
def get_observatory():
    # Menangkap query parameter ?filter= dari frontend
    domain_filter = request.args.get("filter", "all")
    stats = get_observatory_stats(domain_filter)
    return jsonify(stats)