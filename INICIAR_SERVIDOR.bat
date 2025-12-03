@echo off
title Servidor Hamburgueria - NAO FECHE ESTA JANELA
color 0A
echo ========================================
echo    SERVIDOR DA HAMBURGUERIA
echo ========================================
echo.
echo [IMPORTANTE] Mantenha esta janela aberta!
echo.
echo O servidor esta rodando...
echo Para acessar o painel admin, abra:
echo http://localhost:3000/admin.html
echo.
echo ========================================
echo.
cd /d "%~dp0"
node server.js
pause
