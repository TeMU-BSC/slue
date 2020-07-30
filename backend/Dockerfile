# https://www.docker.com/blog/containerized-python-development-part-1/

FROM python:3.8-slim

# install C compiler (gcc) to build uWSGI 
RUN apt-get update && \
    apt-get install gcc -y && \
    apt-get clean

# install python dependencies
COPY requirements.txt /
RUN pip install --upgrade pip && \
    pip install -r /requirements.txt
COPY . /app

# change the working directory to avoid defining FLASK_APP environment variable (default app.py or wsgi.py)
WORKDIR /app/src
