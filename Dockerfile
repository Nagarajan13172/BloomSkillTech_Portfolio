# syntax=docker/dockerfile:1

# ---- Stage 1: build the SPA (needs devDependencies: vite, tsc, tailwind) ----
FROM node:22-alpine AS build
WORKDIR /app

# Install all deps from the lockfile for a reproducible build
COPY package.json package-lock.json ./
RUN npm ci

# Build → /app/dist  (tsc -b && vite build; public/ is bundled into dist/)
COPY . .
RUN npm run build

# ---- Stage 2: runtime (production deps only + built assets) ----
FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production

# Only express/nodemailer/dotenv land in the final image
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# App code + built front-end
COPY server ./server
COPY --from=build /app/dist ./dist

# Drop root for the running process
USER node

# Server reads PORT from env (defaults to 3001); see server/index.js
EXPOSE 3001

# Container health via the existing /api/health endpoint
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -qO- "http://localhost:${PORT:-3001}/api/health" || exit 1

CMD ["node", "server/index.js"]
