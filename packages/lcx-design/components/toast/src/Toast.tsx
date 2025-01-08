import { CSSProperties, ReactNode, useEffect } from "react";
import { useSpringValue, animated, easings } from "@react-spring/web";
import useNamespace from "../../../utils/useNamespace";
import { createPortal } from "react-dom";
import { BasicProps } from "../../../utils";
import classNames from "classnames";

type GetContainer = HTMLElement | (() => HTMLElement) | null;

type PropagationEvent = "click" | "touchstart";

export type ToastProps = BasicProps & {
  afterClose?: () => void;
  maskStyle?: () => CSSProperties;
  maskClassName?: string;
  maskClickable?: boolean;
  content?: ReactNode;
  icon?: "success" | "fail" | "loading" | ReactNode;
  duration?: number;
  position?: "top" | "bottom" | "center";
  visible?: boolean;
  getContainer?: GetContainer;
  stopPropagation?: PropagationEvent;
};

const ns = useNamespace("toast");

export default function InternalToast({
  afterClose,
  content,
  duration = 2000,
  style,
  className,
  icon,
  ...resets
}: ToastProps) {
  const opacity = useSpringValue(0, {
    config: {
      mass: 5,
      duration: 400,
    },
  });

  const top = useSpringValue("38%", {
    config: {
      mass: 1,
      easing: easings.easeOutSine,
      duration: 500,
    },
  });

  useEffect(() => {
    opacity.start(1);
    top.start("40%");

    const id = setTimeout(async () => {
      if (duration === 0) return;
      opacity.start(0);
      const result = await top.start("42%");
      if (result?.finished === true) {
        afterClose?.();
      }
    }, duration);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return createPortal(
    <animated.div
      className={classNames(ns.b(), className, { [ns.m("has-icon")]: icon })}
      style={{
        opacity,
        top,
        ...style,
      }}
      {...resets}
    >
      <div className={ns.e("icon")}>{icon}</div>
      {content}
    </animated.div>,
    document.body,
  );
}
