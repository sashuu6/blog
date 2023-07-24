# Portfolio Website

## Introduction

This repository contains the code to host personal portfolio website. 

## Architecture

![Architecture](docs/portfolio-website-architecture.jpg)

## Prerequisites

1. Server with git, docker and docker compose installed and configured.
2. Domain DNS record connected to the target server.

## Installation Steps

1. Clone the repository on the target server using the command `git clone https://github.com/sashuu69/portfolio_site.git`.
2. Update `data.json` under `bin/portfolio_webserver` with necessary changes.
3. Create SSL certificate using the command `sudo certbot certonly --standalone -d <Host URL> -d www.<Host URL>`.
4. Copy the SSL certificates under `config/ssl` and update `docker-compose.yaml` to connect the SSL certificates.
5. Build using the command `docker compose build` or `docker-compose build`.
6. Bring up the containers using the command `docker compose up -d` or `docker-compose up  -d`.

## Technologies Used

1. Frontend - HTML, CSS, Javascript, Bootstrap
2. Backend - Python Flask
3. Reverse Proxy - Nginx
4. Docker compose used to create multi container application

## Development Setup

1. Make sure Python3, pip3 and virtualenv is installed on the development setup.
2. Create python virtual environment using the command `virtualenv portfolio_env`.
3. Active the virtual environment using the command `source portfolio_env/bin/activate`.
4. Install necessary python packages using the command `pip3 install -r bin/portfolio_webserver/requirements.txt`.
5. To run the flask app, run the command `python3 bin/portfolio_webserver/app.py`.

## Contributors

1. Sashwat K <sashwat0001@gmail.com>

## Other Info

If you face any bugs or want to request for a new feature, please create an issue under the repository and provide appropriate labels respectively. If you want to do these by yourself, feel free to raise a PR and I will do the necessary.

If you want to support me, donations will be helpful.
