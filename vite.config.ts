import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
<<<<<<< HEAD
  base: "/the-end-website/",  // 👈 wichtig für GitHub Pages
  publicDir: "public",
  server: { host: "::", port: 8080 },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  build: {
    outDir: "docs",
    emptyOutDir: true,
    rollupOptions: {
      input: { main: path.resolve(__dirname, "index.html") },
      output: {
        assetFileNames: ({ name }) => {
          if (name?.endsWith(".woff") || name?.endsWith(".woff2") || name?.endsWith(".ttf")) {
            return "fonts/[name][extname]";
          }
          if (name?.includes("images/")) {
            return "[name][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
=======
  base: "/mendorferbuch/",

  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
>>>>>>> 6833e0dd9faea89b9c0c6e3755f39f80260e6b45
    },
  },
}));

