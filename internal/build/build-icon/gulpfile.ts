import { series } from "gulp";
import buildModules from "./tasks/build-bundle";
import { withTaskName } from "../../build/build-utils/gulp";
import { run } from "../../build/build-utils";
import { buildReact } from "./tasks/build-react";
import { cleanIconReact } from "./tasks/clean-icon";
import { generateIndex } from "./tasks/generate-index";
import { copyFiles } from "./tasks/copyFiles";
export default series(
  withTaskName("clean", () => run("pnpm run clean")),
  cleanIconReact,
  buildReact,
  generateIndex,
  buildModules,
  copyFiles
);
