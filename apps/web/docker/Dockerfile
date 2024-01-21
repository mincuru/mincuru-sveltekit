FROM node:18.19.0 as builder

# app
COPY ./package.json .
COPY ./package-lock.json .
COPY ./turbo.json .
COPY ./apps/web ./apps/web
COPY ./packages/database ./packages/database
COPY ./packages/typescript-config ./packages/typescript-config
COPY ./packages/eslint-config ./packages/eslint-config
RUN npm ci --omit dev
# COPY npm install
# RUN npm run build

CMD ["node", "build"]