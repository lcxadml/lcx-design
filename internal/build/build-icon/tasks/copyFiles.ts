import { copyFile } from "fs/promises";
import path from "path";
import { IconOut, lcxDesignIconRoot } from "../../build-utils";

export const copyFiles = async () => {
  await copyFile(
    path.resolve(lcxDesignIconRoot, "package.json"),
    path.resolve(IconOut, "package.json")
  );
};
