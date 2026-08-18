import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Served from the apex domain rathishux.in, so the site sits at the root and
// asset paths need no prefix. This must stay in step with public/CNAME: if the
// custom domain is ever removed, GitHub Pages falls back to
// rathishux.github.io/Rathish.UX/ and this has to go back to "/Rathish.UX/".
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
