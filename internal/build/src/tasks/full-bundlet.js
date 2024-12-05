import { resolve } from "path";
import { rollup } from "rollup";
import { compOut, compRoot } from "../../build-utils/index.ts";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import babel from "@rollup/plugin-babel";
import esbuild from "rollup-plugin-esbuild";
import typescript from "@rollup/plugin-typescript";

export const buildFullEntry = async () => {
  const bundle = await rollup({
    input: resolve(compRoot, "index.ts"),
    plugins: [
      nodeResolve({
        extensions: [".js", ".jsx", ".ts", ".tsx", ".less"], //允许我们加载第三方模块
      }),
      babel({
        babelHelpers: "bundled",
        presets: ["@babel/preset-react", "@babel/preset-flow"],
        extensions: [".ts", ".tsx"],
      }),
      typescript(),
      esbuild(),
      commonjs(),
    ],

    external: [],
  });
  // 写入磁盘
  bundle.write({
    format: "umd",
    file: resolve(compOut, "dist", "index.full.js"),
    name: "LcxDesign",
  });
};
