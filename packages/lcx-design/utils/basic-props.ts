import { CSSProperties } from "react";

export type BasicProps<S extends string = never> = {
  className?: string;
  style?: CSSProperties & Partial<Record<S, string>>;
};
