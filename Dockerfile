FROM node:24-bookworm-slim
WORKDIR /app
COPY package.json ./
COPY registry ./registry
RUN mkdir -p /data && chown node:node /data
USER node
ENV HOST=0.0.0.0 PORT=8080 REGISTRY_DB=/data/registry.db
EXPOSE 8080
CMD ["node", "registry/server.mjs"]
