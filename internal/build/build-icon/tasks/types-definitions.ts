import { join } from "path";
import { IconOut, lcxDesignIconRoot, run } from "../../build-utils/index";
import { buildOutput } from "../../build-utils/index";
import { copy, remove } from "fs-extra";

const generateTypesDefinitions = async () => {
  await run(
    "npx tsc -p tsconfig.json --declaration --emitDeclarationOnly --declarationDir dist/types"
  );

  const sourceDir = join(
    buildOutput,
    "types",
    "packages",
    "lcx-design-icon",
    "react"
  );

  const typesDirEs = join(IconOut, "lcx-design-icon", "es");
  const typesDirLib = join(IconOut, "lcx-design-icon", "lib");
  await copy(sourceDir, typesDirEs);
  await copy(sourceDir, typesDirLib);
};

export default generateTypesDefinitions;
