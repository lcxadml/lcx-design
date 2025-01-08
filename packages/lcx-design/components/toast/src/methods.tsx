import { ReactNode } from "react";
import {
  ImperativeHandler,
  renderImperatively,
} from "../../../utils/render-to-body";
import InternalToast from "./Toast";

let currentHandler: ImperativeHandler | null = null;

export type ShowProps = {
  content: string;
  afterClose?: () => void;
  duration?: number;
  icon?: ReactNode;
};

const show = (props: ShowProps | string) => {
  const mergeProps = typeof props === "string" ? { content: props } : props;
  const element = <InternalToast {...mergeProps} />;

  if (currentHandler) {
    if (currentHandler.isRendered?.()) {
      currentHandler.replace(element);
    } else {
      currentHandler = renderImperatively(element);
    }
  } else {
    currentHandler = renderImperatively(element);
  }
};

const clear = () => {
  currentHandler?.close();
  currentHandler = null;
};

const Toast = { show, clear };

export default Toast;
