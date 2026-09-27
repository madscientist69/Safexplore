def generate_htaccess_fix(infected_status: bool):
    if not infected_status:
        return "Sistem aman. Tidak perlu tindakan."
    
    return """# --- WEBPATROL AUTO-REMEDIATION ---
# Blokir bot asing/eksekusi script di direktori rentan
<FilesMatch "\.(php|php5|phtml|sh|py|pl)$">
    Order Allow,Deny
    Deny from all
</FilesMatch>

RewriteEngine On
RewriteCond %{HTTP_REFERER} (slot|gacor|togel) [NC]
RewriteRule ^ - [F,L]
# ----------------------------------
"""