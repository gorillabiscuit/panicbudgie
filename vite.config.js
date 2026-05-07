import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  publicDir: "../images",
  server: {
    port: 5173,
    open: true,
    host: true
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true
  }
});
