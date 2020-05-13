# Use the Python3.7 image
FROM python:3.8.2-buster

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app 
ADD . /app

# Install the dependencies
RUN pip install --upgrade pip && \
    pip install -r requirements.txt
