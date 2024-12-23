import {
  lcxDesignIconRootReact,
  lcxDesignIconRootSvg,
} from "../../../build/build-utils";

import { transform } from "@svgr/core";

import { glob } from "fast-glob";
import { readFileSync, writeFile } from "fs";
import * as path from "path";

export const buildReact = async () => {
  const input = await glob("*.svg", {
    cwd: lcxDesignIconRootSvg,
    absolute: true,
    onlyFiles: true,
    objectMode: true,
  });
  input.forEach(async (file) => {
    const svgStr = readFileSync(file.path, { encoding: "utf-8" });

    const [initName] = file.name.split(".");

    const getCompName = (name: string) => {
      const nameArr = name.split("-");
      if (nameArr?.length < 1) {
        return "";
      }

      return nameArr.reduce((pre, cur) => {
        return pre + cur.charAt(0).toUpperCase() + cur.slice(1);
      }, "");
    };

    const res = await transform(
      svgStr,
      {
        icon: true,
        typescript: true,
        plugins: [
          "@svgr/plugin-svgo",
          "@svgr/plugin-jsx",
          "@svgr/plugin-prettier",
        ],
      },
      {
        componentName: getCompName(initName),
      },
    );
    const fileName = file.name.replace(".svg", ".tsx");

    writeFile(
      path.resolve(lcxDesignIconRootReact, fileName),
      res,
      "utf-8",
      (err) => {
        if (err) {
          if (err) {
            console.log("写入失败：", err);
          }
        }
        console.log("写入成功！", file.name);
      },
    );
  });
};
