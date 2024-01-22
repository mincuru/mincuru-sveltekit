FROM node:18.19.0 as builder

# app
COPY ./package.json .
COPY ./package-lock.json .
COPY ./turbo.json .
COPY ./apps/web ./apps/web
COPY ./packages/database ./packages/database
COPY ./packages/typescript-config ./packages/typescript-config
COPY ./packages/eslint-config ./packages/eslint-config
RUN npm install
RUN npm run db:generate -w packages/database
RUN npm run build -w apps/web

COPY ./apps/web/scripts/run.sh ./run.sh
RUN chmod +x ./run.sh

ENTRYPOINT [ "/run.sh" ]