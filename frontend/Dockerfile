# Use Node.js for building the Vite app
FROM node:18 AS build
 
WORKDIR /app
 
# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install
 
# Copy the rest of the frontend code
COPY . .
 
# Build the Vite app
RUN npm run build
 
# Use Nginx to serve the built Vite app
FROM nginx:alpine
 
# Copy the built files to Nginx
COPY --from=build /app/dist /usr/share/nginx/html
 
# Expose the Nginx port
EXPOSE 80
 
# Start Nginx
CMD ["nginx", "-g", "daemon off;"]