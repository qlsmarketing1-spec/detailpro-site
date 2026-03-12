# Use Node.js 23 for native TypeScript support
FROM node:23-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build both frontend and server
RUN npm run build

# Set production environment
ENV NODE_ENV=production

# Prune dev dependencies
RUN npm prune --production

# Expose the port (Cloud Run uses PORT env var, but we expose 3000 as default)
EXPOSE 3000

# Start the bundled server
CMD ["node", "server.js"]
