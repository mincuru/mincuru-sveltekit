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

# awscli
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip
RUN ./aws/install

# jq
RUN curl -o /usr/bin/jq -L https://github.com/stedolan/jq/releases/download/jq-1.5/jq-linux64 && chmod +x /usr/bin/jq

COPY ./apps/web/scripts/run.sh ./run.sh
RUN chmod +x ./run.sh

ENTRYPOINT [ "/run.sh" ]