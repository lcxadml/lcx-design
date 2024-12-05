import { Project } from "ts-morph";
const typeCheck = (project: Project) => {
  const diagnostics = project.getPreEmitDiagnostics();

  if (diagnostics.length > 0) {
    console.error(project.formatDiagnosticsWithColorAndContext(diagnostics));
    const err = new Error("Failed to generate dts.");
    console.error(err);
    throw err;
  }
};

export default typeCheck;
