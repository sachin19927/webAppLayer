# Build and compile the frontend
#  FROM node:alpine as build-stage
#  WORKDIR /app
#  COPY package*.json .
#  RUN npm install
#  COPY ./ /app/
#  RUN npm run -- --output-path=./dist/out --configuration local

# FROM node:14.15.5-alpine3.10 AS builder
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build

# FROM nginx:1.17.10-alpine
# COPY --from=builder /app/dist/out/* /usr/share/nginx/html/

# Get the compiled app ready to be served with Nginx
#FROM nginx:latest
#COPY /dist/web-app-layer /usr/share/nginx/html
#COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
# COPY ./nginx-configuration.conf /etc/nginx/conf.d/default.conf


# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the Angular app
RUN npm run build

# Expose port 80 for the container
EXPOSE 80

# Start the server
CMD ["npm", "run", "start"]
