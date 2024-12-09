import { join } from "path";
import { run } from "../../build-utils/index";
import { buildOutput } from "../../build-utils/index";
import { copy, remove } from "fs-extra";

const generateTypesDefinitions = async () => {
  await run(
    "npx tsc -p tsconfig.json --declaration --emitDeclarationOnly --declarationDir dist/types"
  );

  const sourceDir = join(buildOutput, "types", "packages", "lcx-design");

  const typesDirEs = join(buildOutput, "lcx-design", "es");
  const typesDirLib = join(buildOutput, "lcx-design", "lib");
  await copy(sourceDir, typesDirEs, { recursive: true });
  await copy(sourceDir, typesDirLib, { recursive: true });
  await remove(sourceDir);
};

export default generateTypesDefinitions;
