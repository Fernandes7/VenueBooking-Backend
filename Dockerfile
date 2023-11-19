FROM node:10-alpine

# Create the app directory
WORKDIR /home/node/app

# Copy package files
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose port 8000
EXPOSE 8000

# Command to run the application
CMD ["node", "app.js"]
