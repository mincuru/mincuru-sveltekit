import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from "@aws-sdk/client-secrets-manager";
import { Handler, S3Event } from "aws-lambda";
import { execFile } from "child_process";
import path from "path";

export const handler: Handler = async (event, _, __) => {
  try {
    const client = new SecretsManagerClient();
    const response = await client.send(
      new GetSecretValueCommand({
        SecretId: "MincuruRds", //process.env.SECRET_NAME,
      })
    );
    const username = JSON.parse(response.SecretString!).username;
    const password = JSON.parse(response.SecretString!).password;
    const host = JSON.parse(response.SecretString!).host;
    const port = JSON.parse(response.SecretString!).port;
    const name = JSON.parse(response.SecretString!).dbname;
    process.env.DATABASE_URL = `postgresql://${username}:${password}@${host}:${port}/${name}?schema=public`;
    console.log(process.env.DATABASE_URL);
    const exitCodeMigrate = await new Promise((resolve, _) => {
      execFile(
        path.resolve("./node_modules/prisma/build/index.js"),
        ["migrate", "deploy"],
        {
          env: {
            ...process.env,
          },
        },
        (error, stdout, stderr) => {
          console.log(stdout);
          if (error != null) {
            console.log(
              `prisma migrate deploy exited with error ${error.message}`
            );
            resolve(error.code ?? 1);
          } else {
            resolve(0);
          }
        }
      );
    });

    if (exitCodeMigrate != 0) {
      throw Error(`migration failed with exit code ${exitCodeMigrate}`);
    }

    const exitCodeSeed = await new Promise((resolve, _) => {
      execFile(
        path.resolve("./node_modules/prisma/build/index.js"),
        ["db", "seed"],
        {
          env: {
            ...process.env,
          },
        },
        (error, stdout, stderr) => {
          console.log(stdout);
          if (error != null) {
            console.log(
              `prisma migrate deploy exited with error ${error.message}`
            );
            resolve(error.code ?? 1);
          } else {
            resolve(0);
          }
        }
      );
    });

    if (exitCodeSeed != 0) {
      throw Error(`seeding failed with exit code ${exitCodeSeed}`);
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
};
