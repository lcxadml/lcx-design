import { Project, ScriptTarget } from "ts-morph";
import { buildOutput, pathRoot } from "../../build-utils";
import { resolve } from "path";
import typeCheck from "../../build-utils/typecheck";

const project = new Project({
  compilerOptions: {
    target: ScriptTarget.ES2018,
    emitDeclarationOnly: true,
    outDir: resolve(buildOutput, "types"),
    preserveSymlinks: true,
    skipLibCheck: true,
    noImplicitAny: false,
  },
  tsConfigFilePath: resolve(pathRoot, "tsconfig.json"),
});

export const generateTypesDefinitions = async () => {
  typeCheck(project);

  await project.emit();
};
