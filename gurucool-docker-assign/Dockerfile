# Use Node.js official image as base
FROM node:18-alpine

# Set working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install the Node.js dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the application port
EXPOSE 5000

# Start the Node.js application
CMD ["npm", "start"]
