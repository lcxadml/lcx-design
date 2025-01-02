import React, { CSSProperties, ReactNode } from "react";
import "../style/Button.less";
import useNamespace from "../../../utils/useNamespace";
import classNames from "classnames";

type BasicProps = {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

export type ButtonProps = BasicProps & {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export default function Button({
  children,
  className,
  onClick,
  ...reset
}: ButtonProps) {
  const ns = useNamespace("button");
  return (
    <div onClick={onClick} className={classNames(ns.b(), className)} {...reset}>
      {children}
    </div>
  );
}
