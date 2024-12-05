import { copyFile } from "fs/promises";
import { compOut, lcxDesignRoot } from ".";
import { join, resolve } from "path";

const copyFiles = () =>
  copyFile(
    resolve(lcxDesignRoot, "package.json"),
    resolve(compOut, "package.json")
  );
copyFiles();
