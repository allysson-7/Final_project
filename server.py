#!/usr/bin/env python3
import http.server
import socketserver
import os

# Change to the directory where index.html is located
os.chdir(os.path.dirname(__file__))

# Set the port
PORT = 8000

# Create the server
Handler = http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at port {PORT}")
    print(f"Open http://localhost:{PORT} in your browser")
    httpd.serve_forever()