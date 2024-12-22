import { readFile } from "fs/promises";
import path from "path";
import { lcxDesignRoot } from "../internal/build/build-utils";
import chalk from "chalk";

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

  if (!tagVersion) {
    return chalk.whiteBright.bold.redBright("版本号不存在！");
  }

  const [publishType, publishVersion] = tagVersion.split("-");
  if (!publishType || !publishVersion || publishType !== "icon") {
    return chalk.whiteBright.bold.redBright("Tag版本有误！");
  }

  data.version = publishVersion;

  await writeFile(
    path.resolve(lcxDesignRoot, "package.json"),
    JSON.stringify(data, null, 2)
  );
  console.log("update icon version successful!", data?.version);
};

main();
