import { Handler, S3Event } from "aws-lambda";
import { fuga, fugaAsync } from "./src/hoge";

export const handler: Handler = async (event: S3Event) => {
  const num = fuga(100);
  const e = await fugaAsync(event);
  console.log(event);
};
