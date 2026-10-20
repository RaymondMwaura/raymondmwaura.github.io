import { fileURLToPath, URL } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Deployed to https://raymondmwaura.github.io — a GitHub Pages *user* site, served
// from the domain root, so no base path is needed. A project site would need one.
export default defineConfig({
  // Not "spa": its fallback answers every unknown path with index.html and a 200, so a
  // missing file looks present locally and only 404s on GitHub Pages. The site has no
  // client-side routes to need the fallback, and the smoke tests rely on real 404s.
  appType: "mpa",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: "es2022",
    cssMinify: "lightningcss",
    // The site is small enough that a single chunk beats the waterfall of many.
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
