import { defineConfig } from "vite";
import { cpSync, existsSync } from "node:fs";
import { resolve } from "node:path";

// Ships the standalone style guide alongside the marketing site so it lives
// at /style-guide/ on the same domain. Source: ./style-guide/ at repo root
// (HTML + curated character/ PNGs). Runs after Vite finishes the main build.
const styleguideCopyPlugin = () => ({
  name: "panicbudgie-styleguide-copy",
  apply: "build",
  closeBundle() {
    const src = resolve(process.cwd(), "style-guide");
    const dst = resolve(process.cwd(), "dist", "style-guide");
    if (!existsSync(src)) return;
    cpSync(src, dst, { recursive: true });
    console.log("\n✓ panicbudgie-style-guide → /style-guide/");
  },
});

export default defineConfig({
  root: "src",
  publicDir: "../images",
  plugins: [styleguideCopyPlugin()],
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
