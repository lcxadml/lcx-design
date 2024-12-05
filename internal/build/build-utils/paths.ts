import { resolve } from "path";

export const pathRoot = resolve(__dirname, "..", "..", "..");

export const pkgRoot = resolve(pathRoot, "packages");

export const lcxDesignRoot = resolve(pkgRoot, "lcx-design");

export const compRoot = resolve(lcxDesignRoot, "components");

export const buildOutput = resolve(pathRoot, "dist");

export const compOut = resolve(buildOutput, "lcx-design");
