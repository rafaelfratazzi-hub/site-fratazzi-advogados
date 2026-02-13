#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Servidor HTTP simples para servir o site localmente
Garante que sempre inicia no diretório correto
"""
import os
import http.server
import socketserver
import webbrowser
import socket
import time
from pathlib import Path

# Obtém o diretório onde este script está localizado
SCRIPT_DIR = Path(__file__).parent.absolute()

# Muda para o diretório do script
os.chdir(SCRIPT_DIR)

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def verificar_porta_em_uso(porta):
    """Verifica se a porta está em uso"""
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    resultado = sock.connect_ex(('localhost', porta))
    sock.close()
    return resultado == 0

def main():
    # Verifica se index.html existe
    index_path = SCRIPT_DIR / 'index.html'
    if not index_path.exists():
        print(f"ERRO: index.html não encontrado em {SCRIPT_DIR}")
        input("Pressione Enter para sair...")
        return
    
    url = f"http://localhost:{PORT}/index.html"
    
    # Verifica se a porta já está em uso
    if verificar_porta_em_uso(PORT):
        print("=" * 60)
        print("SERVIDOR JÁ ESTÁ RODANDO")
        print("=" * 60)
        print(f"URL: {url}")
        print("=" * 60)
        print("\nAbrindo o navegador...\n")
        webbrowser.open(url)
        print("Site aberto no navegador!")
        print("\nSe o navegador não abrir, copie e cole esta URL:")
        print(url)
        input("\nPressione Enter para sair...")
        return
    
    print("=" * 60)
    print("SERVIDOR LOCAL INICIADO")
    print("=" * 60)
    print(f"Diretório: {SCRIPT_DIR}")
    print(f"URL: http://localhost:{PORT}")
    print(f"URL completa: {url}")
    print("=" * 60)
    print("\nPressione Ctrl+C para parar o servidor\n")
    
    try:
        with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
            # Pequeno delay para garantir que o servidor esteja pronto
            time.sleep(0.5)
            
            # Abre o navegador automaticamente
            print(f"Abrindo {url} no navegador...")
            webbrowser.open(url)
            
            # Inicia o servidor
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\nServidor encerrado.")
    except OSError as e:
        if e.errno == 10048:  # Porta já em uso (Windows)
            print(f"\nERRO: A porta {PORT} já está em uso!")
            print(f"Abrindo {url} no navegador...")
            webbrowser.open(url)
            print("\nSe o navegador não abrir, copie e cole esta URL:")
            print(url)
        else:
            print(f"\nERRO: {e}")
        input("\nPressione Enter para sair...")

if __name__ == "__main__":
    main()

