FROM node:20.11.0 as builder

# app
COPY ./package.json .
COPY ./package-lock.json .
COPY ./turbo.json .
COPY ./packages/database ./packages/database
COPY ./packages/typescript-config ./packages/typescript-config
COPY ./packages/eslint-config ./packages/eslint-config
RUN npm install
# RUN npx prisma generate
COPY ./apps/migrate/scripts/run.sh ./run.sh
RUN chmod +x ./run.sh

# awscli
WORKDIR /aws
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip
RUN ./aws/install

# jq
RUN curl -o /usr/bin/jq -L https://github.com/stedolan/jq/releases/download/jq-1.5/jq-linux64 && chmod +x /usr/bin/jq

ENTRYPOINT ["/run.sh"]
