import { GenericContainer } from "testcontainers";

export default async function (project) {
  const redisContainer = await new GenericContainer("redis:alpine")
    .withExposedPorts(6379)
    .start();

  const redisUrl = `redis://${redisContainer.getHost()}:${redisContainer.getMappedPort(
    6379
  )}`;
  project.provide("redisUrl", redisUrl);

  return async () => {
    await redisContainer.stop();
  };
}
