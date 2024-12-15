import { resolve } from "path";
import { rollup } from "rollup";
import { compOut, compRoot } from "../../build-utils/index";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import esbuild from "rollup-plugin-esbuild";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export const buildFullEntry = async () => {
  const bundle = await rollup({
    input: resolve(compRoot, "index.ts"),
    plugins: [
      postcss({
        // 支持 Less 文件
        extensions: [".css", ".less"],
        extract: true, // 将 CSS 提取到单独的文件中
        minimize: true, // 压缩 CSS
        use: ["less"],
      }),
      nodeResolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"], //允许我们加载第三方模块
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
    file: resolve(compOut, "umd", "index.full.js"),
    name: "LcxDesign",
  });
};
