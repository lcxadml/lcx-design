import { TaskFunction } from "gulp";
import { buildRoot } from "./paths";
import { run } from "./process";

export const withTaskName = <T extends TaskFunction>(name: string, fn: T) => {
  return Object.assign(fn, { displayName: name });
};

export const runTask = (name: string) => {
  run(`pnpm run start ${name}`, buildRoot);
};
