# https://www.docker.com/blog/containerized-python-development-part-1/

# set base image (host OS)
FROM python:3.8-slim

# set the working directory in the container
WORKDIR /app

# copy the dependencies file to the working directory
COPY requirements.txt .

# install dependencies
RUN pip install -r requirements.txt

# copy the content of the local src directory to the working directory
COPY src/ .

# change the working directory to avoid defining FLASK_APP environment variable (default app.py or wsgi.py)
WORKDIR /app/src
