// update
import { S3Event } from "aws-lambda";

export const fuga = (price: number) => {
  return price * 1.08;
};

export const fugaAsync = async (event: S3Event) => {
  return await Promise.resolve(event);
};
