FROM public.ecr.aws/lambda/nodejs:18 as builder
WORKDIR /usr/app
COPY ./apps/lamcon/package.json .
COPY ./apps/lamcon/index.ts .
RUN npm install
RUN npm run build

FROM public.ecr.aws/lambda/nodejs:18
WORKDIR ${LAMBDA_TASK_ROOT}
COPY --from=builder /usr/app/dist/* ./
CMD ["index.handler"]