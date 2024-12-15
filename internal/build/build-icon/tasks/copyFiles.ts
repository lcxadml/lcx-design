import { copyFile } from "fs/promises";
import path from "path";
import { lcxDesignIconRoot, lcxDesignIconRootReact } from "../../build-utils";

export const copyFiles = async () => {
  await copyFile(
    path.resolve(lcxDesignIconRoot, "package.json"),
    path.resolve(
      lcxDesignIconRootReact,
      "dist",
      "lcx-design-icon",
      "package.json"
    )
  );
};
