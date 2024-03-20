import { handler } from "../index";
import { Context } from "aws-lambda";

const mockContext: Partial<Context> = {};

test("Test handler", async () => {
  const actual = await handler("hoge", mockContext as Context, jest.fn());
});
