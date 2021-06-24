FROM node:14.17.1-alpine3.13

WORKDIR /app

COPY ./package*.json ./
RUN npm ci && npm cache clean --force

COPY . ./

ENTRYPOINT ["node", "src/index.js"]

ENV NODE_ENV production
USER node
EXPOSE 3000