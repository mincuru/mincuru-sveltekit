#!/bin/bash

# Secrets Managerから認証情報を取得
SECRET=$(/usr/local/bin/aws secretsmanager get-secret-value --secret-id MincuruRds --query SecretString --output text)
DB_USERNAME=$(echo $SECRET | jq -r .username)
DB_PASSWORD=$(echo $SECRET | jq -r .password)
DB_HOST=$(echo $SECRET | jq -r .host)
DB_PORT=$(echo $SECRET | jq -r .port)
DB_NAME=$(echo $SECRET | jq -r .dbname)
# DB_USERNAME="postgres"
# DB_PASSWORD="password"
# DB_HOST="host.docker.internal"
# DB_PORT="5432"
# DB_NAME="mincuru"

# DATABASE_URLを生成
export DATABASE_URL="postgresql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?schema=public"

# SvelteKit Standalone server起動
node apps/web/build
