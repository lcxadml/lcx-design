import {
  ImperativeHandler,
  renderImperatively,
} from "../../../utils/render-to-body";
import InternalToast from "./Toast";

let currentHandler: ImperativeHandler | null = null;

const show = () => {
  if (currentHandler) {
    if (currentHandler.isRendered?.()) {
      currentHandler.replace(<InternalToast />);
    } else {
      currentHandler = renderImperatively(<InternalToast />);
    }
  } else {
    currentHandler = renderImperatively(<InternalToast />);
  }
};

const clear = () => {
  currentHandler?.close();
  currentHandler = null;
};

const Toast = { show, clear };

export default Toast;
