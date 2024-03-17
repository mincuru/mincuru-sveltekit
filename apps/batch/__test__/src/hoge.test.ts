import { fuga, fugaAsync } from "../../src/hoge";

test("fuga returns valid value", async () => {
  const actual = fuga(100);
  expect(actual).toBe(108);
});

test("fugaAsync returns valid value", async () => {
  const event = { Records: [] };
  const actual = await fugaAsync({ Records: [] });
  expect(actual).toEqual({ Records: [] });
});
