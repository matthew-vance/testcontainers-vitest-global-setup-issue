import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globalSetup: "./global-setup.js",
    // reporters: ["hanging-process"],
  },
});
