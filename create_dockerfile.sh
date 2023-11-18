#!/bin/bash

# Script to generate a Dockerfile for a React application using npm

# Name of the Dockerfile
DOCKERFILE_NAME="Dockerfile"

# Create the Dockerfile
cat << EOF > $DOCKERFILE_NAME
FROM node:latest as build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

# Step 2: Serve the app using Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
EOF

echo "Dockerfile created successfully."
