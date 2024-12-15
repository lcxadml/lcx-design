import { resolve } from "path";

export const pathRoot = resolve(__dirname, "..", "..", "..");

export const pkgRoot = resolve(pathRoot, "packages");

export const lcxDesignRoot = resolve(pkgRoot, "lcx-design");

export const buildRoot = resolve(pathRoot, "internal");

export const lcxDesignIconRoot = resolve(pkgRoot, "lcx-design-icon");

export const lcxDesignIconRootSvg = resolve(lcxDesignIconRoot, "svg");

export const lcxDesignIconRootReact = resolve(lcxDesignIconRoot, "react");

export const compRoot = resolve(lcxDesignRoot, "components");

export const buildOutput = resolve(pathRoot, "dist");

export const compOut = resolve(buildOutput, "lcx-design");

export const IconOut = resolve(buildOutput, "lcx-design-icon");
