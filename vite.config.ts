import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Deployed as a GitHub Pages *project* site (rathishux.github.io/Rathish.UX/),
// so every asset path needs this prefix — change to "/" only if this repo
// is ever renamed to rathishux.github.io (a root user site).
export default defineConfig({
  base: "/Rathish.UX/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
