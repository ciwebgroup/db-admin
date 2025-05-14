# Use the official JS + Node devcontainer image
FROM mcr.microsoft.com/devcontainers/javascript-node:20

# Create app directory and switch ownership to `node`
WORKDIR /workspace
COPY --chown=node:node package*.json ./

# Install deps as root (optional) or switch first:
# USER node
RUN npm install

# Copy rest of your code
COPY --chown=node:node . .

# Generate Prisma client
RUN npx prisma generate

# Finally switch into the node user
USER node

# Default command
CMD ["npm", "run", "dev"]