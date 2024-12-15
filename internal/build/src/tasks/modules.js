import { resolve } from "path";
import { rollup } from "rollup";
import { compRoot } from "../../build-utils/index.ts";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import esbuild from "rollup-plugin-esbuild";
import typescript from "@rollup/plugin-typescript";
import glob from "fast-glob";
import { pkgRoot, compOut } from "../../build-utils/index.ts";
import postcss from "rollup-plugin-postcss";

const excludeFiles = (files) => {
  const excludes = ["node_modules"];
  return files.filter(
    (path) => !excludes.some((exclude) => path.includes(exclude))
  );
};

export const buildModules = async () => {
  const input = excludeFiles(
    await glob("**/*.{js,ts,jsx}", {
      cwd: compRoot,
      absolute: true,
      onlyFiles: true,
    })
  );

  const bundle = await rollup({
    input,
    plugins: [
      nodeResolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"], //允许我们加载第三方模块
      }),
      postcss({
        // 支持 Less 文件
        extensions: [".css", ".less"],
        extract: true, // 将 CSS 提取到单独的文件中
        minimize: true, // 压缩 CSS
        exec: true,
        use: {
          less: { javascriptEnabled: true }, // Less 配置
        },
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
  const comRoot = resolve(pkgRoot, "lcx-design");
  bundle.write({
    format: "esm",
    dir: resolve(compOut, "es"),
    preserveModules: true,
    preserveModulesRoot: comRoot,
    entryFileNames: "[name].mjs",
  });

  bundle.write({
    format: "cjs",
    dir: resolve(compOut, "lib"),
    preserveModules: true,
    preserveModulesRoot: comRoot,
    entryFileNames: "[name].cjs",
  });
};
buildModules();