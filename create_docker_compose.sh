#!/bin/bash

# Script to generate a Dockerfile for a React application using npm

# Name of the Dockerfile
DOCKERFILE_NAME="docker-compose.yaml"

# Create the Dockerfile
cat << EOF > $DOCKERFILE_NAME
version: '3.8'
services:
  react-app:
    container_name: react-app
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "80:80"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=production
EOF

echo "Dockerfile created successfully."
