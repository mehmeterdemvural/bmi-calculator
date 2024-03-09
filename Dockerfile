# Base image
FROM node:21.6.2-slim

# Set working directory
WORKDIR /web-apps/bmi-calculator

COPY package.json .
COPY yarn.lock .

# Install dependencies
RUN npm install 

# Copy the source code to the working directory
COPY . .

# Install serve
RUN npm install -g serve

# Build the app
RUN npm run build

CMD [ "serve", "-s", "build", "-l", "8030" ]