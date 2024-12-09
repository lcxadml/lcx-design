import { resolve } from "path";
import { compOut, buildOutput } from "./paths";
import { copy } from "fs-extra/esm";

export const copyTypesDefinitions = async () => {
  const src = resolve(buildOutput, "types", "packages", "lcx-design");
  await copy(src, resolve(compOut, "es"), { recursive: true });
  await copy(src, resolve(compOut, "lib"), { recursive: true });
};
