@echo off
cls
echo ===================================
echo   CHILLROOM WIKI UPDATE
echo ===================================
echo.

echo [1/3] Adding new files...
git add .

echo.
echo [2/3] Creating commit...
git commit -m "Update!"

echo.
echo [3/3] Pushing to GitHub...
git push origin main --force

echo.
echo ===================================
echo   Done! The site will update in 1-2 min.
echo ===================================
pause