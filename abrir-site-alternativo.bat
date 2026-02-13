@echo off
echo Abrindo o site diretamente no navegador...
cd /d "%~dp0"
start index.html
echo.
echo Site aberto! Se as fontes ou estilos nao carregarem corretamente,
echo use o arquivo "abrir-site.bat" para iniciar um servidor local.
pause

