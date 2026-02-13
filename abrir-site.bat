@echo off
chcp 65001 >nul
echo ========================================
echo   INICIANDO SERVIDOR LOCAL
echo ========================================
echo.
cd /d "%~dp0"
echo Diretório: %CD%
echo.

REM Verifica se Python está instalado
python --version >nul 2>&1
if errorlevel 1 (
    echo ERRO: Python não encontrado!
    echo Por favor, instale o Python e tente novamente.
    echo.
    pause
    exit /b 1
)

echo Iniciando servidor na porta 8000...
echo O navegador será aberto automaticamente.
echo.
echo Pressione Ctrl+C para parar o servidor.
echo.
python servidor.py
pause

