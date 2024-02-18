FROM node:20.11.0 as builder

ARG GOOGLE_CLIENT_ID
ARG GOOGLE_CLIENT_SECRET
ARG AUTH_SECRET
ENV GOOGLE_CLIENT_ID=${GOOGLE_CLIENT_ID}
ENV GOOGLE_CLIENT_SECRET=${GOOGLE_CLIENT_SECRET}
ENV AUTH_SECRET=${AUTH_SECRET}

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

# awscli
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip
RUN ./aws/install

# jq
RUN curl -o /usr/bin/jq -L https://github.com/stedolan/jq/releases/download/jq-1.5/jq-linux64 && chmod +x /usr/bin/jq

COPY ./apps/web/scripts/run.sh ./run.sh
RUN chmod +x ./run.sh

ENTRYPOINT [ "/run.sh" ]