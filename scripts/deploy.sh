#!/bin/bash

set -e

if [ -z "$1" ]; then
    echo "Domain name parameter missing."
    exit 1
fi

directory="bin/portfolio_webserver"

echo "[INFO] check if $directory exists..."
if [ -d $directory ]; then
    rm -rf $directory
fi

echo "[INFO] clone sashuu69/portfolio-website under $directory"
git clone https://github.com/sashuu69/portfolio-website.git $directory

echo "[INFO] docker compose build"
DOMAIN_NAME="${1}" docker compose build --no-cache

echo "[INFO] docker compose up -d"
DOMAIN_NAME="${1}" docker compose up -d