import { parallel, series } from "gulp";
import { buildFullEntry } from "./tasks/full-bundlet";
import { buildModules } from "./tasks/modules";
import generateTypesDefinitions from "./tasks/types-definitions";
import copyFiles from "../build-utils/copyFile";
import { run } from "../build-utils";
import { withTaskName } from "../build-utils/gulp";

export default series(
  withTaskName("clean", () => run("pnpm run clean")),
  parallel(buildFullEntry, buildModules),
  generateTypesDefinitions,
  copyFiles
);
