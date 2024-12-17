import classNames from "classnames";
import { BasicProps } from "../../../utils/basic-props";
import useNamespace from "../../../utils/useNamespace";
import React, { CSSProperties, ReactNode } from "react";

export type CardProps = {
  /**
   * Header标题
   */
  title?: ReactNode;
  /**
   * Header右边区域
   */
  extra?: ReactNode;
  /**
   * Header自定义样式
   */
  headerStyle?: CSSProperties;
  /**
   * Header自定义类名
   */
  headerClassName?: string;
  /**
   * Body自定义样式
   */
  bodyStyle?: CSSProperties;
  /**
   * Body自定义类名
   */
  bodyClassName?: string;
  /**
   * 卡片点击事件
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /**
   * Body区域点击事件
   */
  onBodyClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /**
   * Header区域点击事件
   */
  onHeaderClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children?: ReactNode;
} & BasicProps;

export default function Card({
  className,
  title,
  extra,
  headerStyle,
  headerClassName,
  bodyStyle,
  bodyClassName,
  onClick,
  onBodyClick,
  onHeaderClick,
  children,
  ...reset
}: CardProps) {
  const ns = useNamespace("card");

  const renderHeader = () => {
    if (!title && !extra) {
      return null;
    }
    return (
      <div
        className={classNames(ns.e("header"), headerClassName)}
        style={headerStyle}
        onClick={onHeaderClick}
      >
        <div className={classNames(ns.e("header-title"))}>{title}</div>
        <div className={classNames(ns.e("header-extra"))}>{extra}</div>
      </div>
    );
  };

  const renderBody = () => {
    if (!children) {
      return null;
    }
    return (
      <div
        style={bodyStyle}
        className={classNames(ns.e("body"), bodyClassName)}
        onClick={onBodyClick}
      >
        {children}
      </div>
    );
  };

  return (
    <div className={classNames(ns.b(), className)} {...reset}>
      {renderHeader()}
      {renderBody()}
    </div>
  );
}
