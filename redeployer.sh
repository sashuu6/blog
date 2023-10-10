#!/bin/bash

echo "Portfolio Website Deployer..."

echo "Bringing down infrastructure..."

docker compose down

echo "Bringing latest changes..."

git pull

echo "Rebuilding docker compose..."

docker compose build --no-cache

echo "Bringing up infrastructure..."

docker compose up -d

echo "Script execution complete..."