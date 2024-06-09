#!/bin/bash

set -e

if [ -z "$1" ]; then
    echo "Domain name parameter missing."
    exit 1
fi

echo "[INFO] docker compose down"
DOMAIN_NAME="${1}" docker compose down