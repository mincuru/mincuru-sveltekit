import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from '@aws-sdk/client-secrets-manager';

async function bootstrap() {
  process.env.DATABASE_URL =
    'postgresql://postgres:password@localhost:5432/mincuru?schema=public';
  try {
    process.env.DATABASE_URL = await getDatabaseUrlFromSecretsManager();
  } catch (e: any) {
    console.log(
      'Fail to retrieve secrets from Secrets Manager. Loaded from environment variable',
    );
  }
  console.log(process.env.DATABASE_URL);

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

async function getDatabaseUrlFromSecretsManager() {
  const client = new SecretsManagerClient();
  const response = await client.send(
    new GetSecretValueCommand({
      SecretId: 'MincuruRds',
    }),
  );
  console.log(response);
  const secrets = JSON.parse(response.SecretString);
  return `postgresql://${secrets.username}:${secrets.password}@${process.env.PROXY_RDS}:${secrets.port}/${secrets.dbname}?schema=public`; //response.SecretString.
}
bootstrap();
