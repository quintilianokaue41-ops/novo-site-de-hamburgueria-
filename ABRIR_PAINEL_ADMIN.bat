@echo off
start INICIAR_SERVIDOR.bat
timeout /t 3 /nobreak > nul
start http://localhost:3000/admin.html
