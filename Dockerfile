# Use an official Node.js runtime as the base image
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /zestbs

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install zestbs dependencies
RUN npm install

# Copy the entire Angular zestbs source code to the container
COPY . .

# Build the Angular zestbs
RUN ng build --configuration=production

# Use NGINX as the web server to serve the Angular zestbs
FROM nginx:alpine

# Copy the built Angular zestbs to the NGINX web root
COPY --from=build /zestbs/dist /usr/share/nginx/html
