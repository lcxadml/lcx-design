import { glob } from "fast-glob";
import { lcxDesignIconRootReact } from "../../build-utils";

const { rimrafSync } = require("rimraf");

export const cleanIconReact = async () => {
  const input = await glob("**/*.{ts,tsx}", {
    cwd: lcxDesignIconRootReact,
    absolute: true,
    onlyFiles: true,
  });
  input.forEach(async(item) => {
    await rimrafSync(item);
  });
};
