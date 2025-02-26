# Use Node.js base image
FROM node:18
 
# Set working directory in container
WORKDIR /app
 
# Copy package.json and package-lock.json
COPY package*.json ./
 
# Install dependencies
RUN npm install
 
# Copy the rest of the application code
COPY . .
 
# Expose the backend port (e.g., 4000)
EXPOSE 4000
 
# Command to run the backend server
CMD ["npm", "start"]