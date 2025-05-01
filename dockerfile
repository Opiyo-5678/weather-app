# Use official Node.js image
FROM node:20

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build the app
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
