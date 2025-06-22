import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(async ({ mode }) => {
  let componentTaggerPlugin = null;

  if (mode === "development") {
    const mod = await import("lovable-tagger");
    componentTaggerPlugin = mod.componentTagger();
  }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      componentTaggerPlugin,
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
