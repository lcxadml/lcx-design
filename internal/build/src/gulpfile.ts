import { parallel, series } from "gulp";
import { buildFullEntry } from "./tasks/full-bundlet";
import { buildModules } from "./tasks/modules";
import { copyTypesDefinitions } from "../build-utils/copyDefinitions";
import { generateTypesDefinitions } from "./tasks/types-definitions";

export default series(
  parallel(buildFullEntry, buildModules, generateTypesDefinitions),
  copyTypesDefinitions
);
