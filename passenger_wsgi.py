import os
import sys

# Memasukkan folder aplikasi ke dalam path sistem
sys.path.insert(0, os.path.dirname(__file__))

# Mengimpor aplikasi Flask dari file main.py
from main import app as application