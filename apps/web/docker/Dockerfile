FROM node:18.19.0 as builder
WORKDIR /web
COPY * ./
RUN npm install
RUN npm run build

