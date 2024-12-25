import { CSSProperties, ReactNode } from "react";

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

// export default function InternalToast({
//   maskClickable = true,
//   ...resets
// }?: ToastProps) {

//   return <div {...resets}></div>;
// }
