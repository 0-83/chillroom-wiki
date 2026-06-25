@echo off
cls
echo ===================================
echo   STARTING LOCAL QUARTZ SERVER
echo ===================================
echo.
echo Open your browser at: http://localhost:8080
echo To stop the server, press Ctrl + C
echo.
npx quartz build --serve
pause