import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  { languageOptions: { globals: globals.browser } },
  {
    ignores: [
      "dist",
      "node_modules",
      "coverage",
      "pnpm-lock.yaml",
      "dist",
      "es",
      "lib",
      "node_modules",
      "docs",
      ".commitlintrc.js",
      ".stylelintrc.js",
    ],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
