import { CSSProperties, ReactNode, useEffect } from "react";
import { useSpringValue, animated, easings } from "@react-spring/web";
import useNamespace from "../../../utils/useNamespace";
import { createPortal } from "react-dom";

type GetContainer = HTMLElement | (() => HTMLElement) | null;

type PropagationEvent = "click" | "touchstart";

export type ToastProps = {
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

export default function InternalToast({ ...resets }: ToastProps) {
  const opacity = useSpringValue(0, {
    config: {
      mass: 5,
      duration: 400,
    },
  });

  const top = useSpringValue("39%", {
    config: {
      mass: 1,
      easing: easings.easeOutSine,
      duration: 500,
    },
  });
  console.log("...", resets);

  useEffect(() => {
    opacity.start(1);
    top.start("40%");

    const id = setTimeout(() => {
      opacity.start(0);
      top.start("39%", {
        onRest() {},
      });
    }, 2000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return createPortal(
    <animated.div
      className={ns.b()}
      style={{
        opacity,
        top,
      }}
    >
      Hello toast
    </animated.div>,
    document.body,
  );
}
