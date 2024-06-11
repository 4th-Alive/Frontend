FROM node:18-alpine AS builder
WORKDIR /usr/src/app
EXPOSE 3000
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
RUN npm install -g serve
ENTRYPOINT [ "serve", "-s", "build" ]