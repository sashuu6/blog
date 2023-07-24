# Portfolio Website

## Introduction

This repository contains the code to host personal portfolio website. 

## Architecture

![Architecture](docs/portfolio-website-architecture.jpg)

## Installation Steps

1. Clone the repository on the target server.
2. Update `data.json` under `bin/portfolio_webserver` with necessary changes.
3. Create SSL certificate using the command `sudo certbot certonly --standalone -d <Host URL> -d www.<Host URL>`.
4. Copy the SSL certificates under `config/ssl` and update `docker-compose.yaml` to connect the SSL certificates.
5. Build using the command `docker compose build` or `docker-compose build`.
6. Bring up the containers using the command `docker compose -d`.

## Technologies Used

1. Frontend - HTML, CSS, Javascript, Bootstrap
2. Backend - Python Flask
3. Reverse Proxy - Nginx
4. Docker compose used to create multi container application

## Contributors

1. Sashwat K <sashwat0001@gmail.com>

## Other Info

If you face any bugs or want to request for a new feature, please create an issue under the repository and provide appropriate labels respectively.