import { defineConfig } from "vite";
import { resolve } from "path";

const outDir = resolve(__dirname, `dist`);

export default defineConfig({
  build: {
    outDir,
    lib: {
      entry: resolve(__dirname, "index.ts"),
      fileName: (format) => `yjwCli.${format}.js`,
      formats: ["es"],
      name: "yjwCli",
    },
  },
});
