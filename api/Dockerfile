# Development Dockerfile for Express API
FROM oven/bun:1-alpine

WORKDIR /app

# Copy package files
COPY package.json bun.lock* ./

# Install dependencies
RUN bun install

# Copy source code
COPY . .

# Expose API port
EXPOSE 3000

# Run with hot reload
CMD ["bun", "--watch", "server.ts"]