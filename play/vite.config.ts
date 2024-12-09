import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { compRoot } from "../internal/build/build-utils/index";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "lcx-design",
        replacement: path.resolve(compRoot, "index.ts"),
      },
    ],
  },
  plugins: [react()],
});
