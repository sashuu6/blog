FROM python:3.8.2
LABEL maintainer="Sashwat K <sashwat0001@gmail.com>"

# Update and upgrade linux container
RUN apt-get -y update
RUN apt-get upgrade -y

# Set working directory as /app
WORKDIR /app

# Copy code files to /app
COPY code /app

# Install the basic packages to run opencv
RUN apt-get update && apt-get install -y \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender-dev

# Install any needed packages specified in requirements.txt
# RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Runs app.py
# ENV FLASK_APP /app/app.py
# ENV FLASK_RUN_HOST 0.0.0.0
# CMD ["flask", "run"]