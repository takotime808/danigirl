# # docker build -t react-app:dg -f deploy/Dockerfile .
# # docker run -p 3000:3000 react-app:dg
# # Use `-d` flag to have container id returned, once it is started
# #   docker run -d -p 3000:3000 react-app:dg

# # Use official Node.js LTS image as the base
# FROM node:20-alpine

# # Set working directory inside the container
# WORKDIR /app

# # Install git and bash
# RUN apk update && apk add --no-cache git bash

# # Clone the React application repository
# RUN git clone https://github.com/gitname/react-gh-pages.git .

# # COPY . .

# # Install dependencies
# RUN npm install

# # Run tests
# RUN npm test -- --watchAll=false

# # Build the React application
# RUN npm run build

# # Expose port for application preview (optional)
# EXPOSE 3000

# # Start the app
# CMD ["npm", "start"]

# # docker build -t react-app:dg -f deploy/Dockerfile .
# # docker run -p 3000:3000 react-app:dg

# Use an official Node runtime as a parent image
FROM node:20-alpine
# FROM node:16

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