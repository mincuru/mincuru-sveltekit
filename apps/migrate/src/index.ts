// import { Handler } from "aws-lambda";
// import { PrismaClient } from "@repo/database";

// export const handler: Handler = async (event, context) => {
//   console.log("EVENT: \n" + JSON.stringify(event, null, 2));
//   const prisma = new PrismaClient();
//   try {
//     // データベース接続
//     await prisma.$connect();

//     // マイグレーションの実行
//     await prisma.$executeRaw("PRAGMA foreign_keys=OFF;");
//     await prisma.$executeRaw("BEGIN TRANSACTION;");
//     // ここにマイグレーションのSQLコマンドを追加
//     await prisma.$executeRaw("COMMIT;");
//     await prisma.$executeRaw("PRAGMA foreign_keys=ON;");

//     return {
//       statusCode: 200,
//       body: JSON.stringify("Migration successful"),
//     };
//   } catch (error) {
//     console.error("Migration failed:", error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify("Migration failed"),
//     };
//   } finally {
//     // データベース接続の切断
//     await prisma.$disconnect();
//   }
//   return context.logStreamName;
// };

// // // Use this code snippet in your app.
// // // If you need more information about configurations or implementing the sample code, visit the AWS docs:
// // // https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started.html

// // import {
// //   SecretsManagerClient,
// //   GetSecretValueCommand,
// // } from "@aws-sdk/client-secrets-manager";

// // const secret_name = "MincuruRds";

// // const client = new SecretsManagerClient({
// //   region: "ap-northeast-1",
// // });

// // let response;

// // try {
// //   response = await client.send(
// //     new GetSecretValueCommand({
// //       SecretId: secret_name,
// //       VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
// //     })
// //   );
// // } catch (error) {
// //   // For a list of exceptions thrown, see
// //   // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
// //   throw error;
// // }

// // const secret = response.SecretString;

// // // Your code goes here
