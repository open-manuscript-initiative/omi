#!/bin/bash
set -euo pipefail

REPO="/var/www/vhosts/openmanuscript.org/source/openmanuscript"
TARGET="/var/www/vhosts/openmanuscript.org/httpdocs"

echo "--------------------------------"
echo "Open Manuscript Initiative"
echo "Deployment started"
echo "Date: $(date)"
echo "--------------------------------"

cd "$REPO"

echo "[1/5] Updating repository..."
git fetch origin main
git checkout -q -f main
git reset --hard origin/main

echo "[2/5] Cleaning generated Docusaurus files..."
rm -rf .docusaurus build

echo "[3/5] Installing dependencies..."
npm ci

echo "[4/5] Building website..."
npm run build

echo "[5/5] Publishing website..."
rsync -av --delete build/ "$TARGET/"

echo ""
echo "--------------------------------"
echo "Open Manuscript Initiative"
echo "Deployment successful"
echo "Commit: $(git rev-parse --short HEAD)"
echo "Date: $(date)"
echo "--------------------------------"
