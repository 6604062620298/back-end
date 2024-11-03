FROM node:18-alpine

# Install bash
RUN apk add --no-cache bash

WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy application files
COPY . .

# Copy wait-for-it.sh script to the container
COPY wait-for-it.sh /wait-for-it.sh

# Ensure wait-for-it.sh has executable permissions
RUN chmod +x /wait-for-it.sh

# Start the application and wait for PostgreSQL to be ready
CMD /wait-for-it.sh postgres:5432 -- npx prisma migrate deploy && npm start