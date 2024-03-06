# FROM public.ecr.aws/lambda/nodejs:18 as builder
FROM node:18 as builder
WORKDIR /src

COPY ./package.json .
COPY ./package-lock.json .
COPY ./turbo.json .
COPY ./apps/api ./apps/api
COPY ./packages/database ./packages/database
COPY ./packages/typescript-config ./packages/typescript-config
COPY ./packages/eslint-config ./packages/eslint-config
RUN npm install
RUN npm run db:generate -w packages/database
RUN npm run build -w apps/api

# FROM public.ecr.aws/lambda/nodejs:18
FROM node:18
# WORKDIR ${LAMBDA_TASK_ROOT}
WORKDIR /app
ENV DATABASE_URL=postgresql://postgres:password@host.docker.internal:5432/mincuru?schema=public
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.8.1 /lambda-adapter /opt/extensions/lambda-adapter
ENV PORT 3000
ENV READINESS_CHECK_PATH /
COPY --from=builder /src/apps/api/dist .
COPY --from=builder /src/node_modules ./node_modules
EXPOSE 3000
# CMD ["lambda.handler"]
CMD ["node", "main"]
