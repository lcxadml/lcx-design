import { series } from "gulp";
import buildModules from "./tasks/build-bundle";
import { withTaskName } from "../../build/build-utils/gulp";
import { run } from "../../build/build-utils";
import { buildReact } from "./tasks/build-react";
import { cleanIconReact } from "./tasks/clean-icon";
import { generateIndex } from "./tasks/generate-index";
import { copyFiles } from "./tasks/copyFiles";
import generateTypesDefinitions from "./tasks/types-definitions";
export default series(
  withTaskName("clean", () => run("pnpm run clean:icon")),
  cleanIconReact,
  buildReact,
  generateIndex,
  buildModules,
  generateTypesDefinitions,
  copyFiles
);
