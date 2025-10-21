# Build stage
FROM node:24-trixie-slim AS builder

WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install all dependencies (including dev dependencies for build)
RUN pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Build the application
RUN pnpm run build

# Remove dev dependencies
RUN pnpm prune --prod

# Production stage
FROM node:24-trixie-slim

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Copy only production dependencies from builder
COPY --from=builder /app/node_modules ./node_modules

# Copy built output
COPY --from=builder /app/.output ./.output

# Expose the application port
EXPOSE 3000

# Set NODE_ENV to production
ENV NODE_ENV=production

# Start the application
CMD ["npm", "run", "start"]
