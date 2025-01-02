import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import {
  compRoot,
  lcxDesignIconRootReact,
} from "../internal/build/build-utils/index";

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "lcx-design",
        replacement: path.resolve(compRoot, "index.ts"),
      },
      {
        find: "lcx-design-icon",
        replacement: path.resolve(lcxDesignIconRootReact, "index.ts"),
      },
    ],
  },
  plugins: [react()],
});
