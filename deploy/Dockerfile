# # docker build -t react-app:dg -f deploy/Dockerfile .
# # docker run -p 3000:3000 react-app:dg

# Use an official Node runtime as a parent image
FROM node:20-alpine

# Install git and bash
RUN apk update && apk add --no-cache git bash

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY ./package*.json ./

# Install the dependencies
RUN npm install

# Copy the remaining application files to the working directory
COPY . .

# Build the application
RUN npm run build

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD [ "npm", "run", "start" ]