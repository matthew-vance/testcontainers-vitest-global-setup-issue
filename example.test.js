import { test, expect, inject, beforeAll, afterAll } from "vitest";
import { createClient } from "redis";

let redisClient;

beforeAll(async () => {
  const redisUrl = inject("redisUrl");
  redisClient = createClient({ url: redisUrl });
  await redisClient.connect();
});

afterAll(async () => {
  await redisClient.disconnect();
});

test("redis", async () => {
  await redisClient.set("key", "val");
  expect(await redisClient.get("key")).toBe("val");
});
