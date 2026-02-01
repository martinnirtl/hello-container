FROM node:22-alpine

WORKDIR /app

COPY ./package*.json ./
RUN npm ci && npm cache clean --force

COPY . ./

ENV NODE_ENV=production
EXPOSE 3000

USER node
ENTRYPOINT ["node", "src/index.js"]