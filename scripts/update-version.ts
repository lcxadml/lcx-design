import { readFile, writeFile } from "fs/promises";
import path from "path";
import { lcxDesignRoot } from "../internal/build/build-utils";
import { logger } from "../internal/build/build-utils";

const main = async () => {
  const tagVersion = process.env.TAG_VERSION;
  const dataStr = await readFile(
    path.resolve(lcxDesignRoot, "package.json"),
    "utf-8"
  );
  let data;
  try {
    data = JSON.parse(dataStr);
  } catch (error) {
    console.log("error:", error);
  }

  logger.info("data: ", tagVersion, data);

  const curVersion = data.version;
};

main();
