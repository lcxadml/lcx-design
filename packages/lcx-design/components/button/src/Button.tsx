import React, { CSSProperties, ReactNode } from "react";
import "../style/Button.less";
import useNamespace from "../../../utils/useNamespace";
import classNames from "classnames";

type BasicProps = {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

export type ButtonProps = BasicProps & {};

export default function Button({ children, className, ...reset }: ButtonProps) {
  const ns = useNamespace("button");
  return (
    <div className={classNames(ns.b(), className)} {...reset}>
      {children}
    </div>
  );
}
