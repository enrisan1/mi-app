import { defineConfig } from "vite";

export default defineConfig(({ command, isPreview }) => ({
  base: command === "build" || isPreview ? "/mi-app/" : "/",
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.js",

    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      reportsDirectory: "./coverage",
    },
  },
}));
