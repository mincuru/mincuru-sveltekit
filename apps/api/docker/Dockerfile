FROM public.ecr.aws/lambda/nodejs:18 as builder
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

FROM public.ecr.aws/lambda/nodejs:18
WORKDIR ${LAMBDA_TASK_ROOT}
COPY --from=builder /src/apps/api/dist .
COPY --from=builder /src/node_modules ./node_modules
CMD ["lambda.handler"]