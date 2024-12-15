import { glob } from "fast-glob";
import { lcxDesignIconRootReact } from "../../build-utils";
import { writeFile } from "fs";
import path from "path";

export const generateIndex = async () => {
  const filePathArr = await glob("*.tsx", {
    cwd: lcxDesignIconRootReact,
    objectMode: true,
    absolute: true,
    onlyFiles: true,
  });

  const outputContent = filePathArr?.map((file) => {
    const [fileName] = file.name.split(".");

    const upperName = fileName.split("-").reduce((pre, cur) => {
      return pre + cur.charAt(0).toUpperCase() + cur.slice(1);
    }, "");

    return `export { default as ${upperName} } from './${file.name}';`;
  });

  outputContent.forEach(async (item) => {
    await writeFile(
      path.resolve(lcxDesignIconRootReact, "index.ts"),
      item + "\n",
      {
        encoding: "utf-8",
        flag: "a",
      },
      (err) => {
        if (err) {
          if (err) {
            console.log("写入失败icon: index.ts：", err, item);
          }
        }
        console.log("写入icon: index.ts成功！", item);
      }
    );
  });
};
generateIndex();
