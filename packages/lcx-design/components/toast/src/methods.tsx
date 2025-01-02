import { renderToBody } from "../../../utils/render-to-body";
import InternalToast from "./Toast";

const show = () => {
  renderToBody(<InternalToast />);
};

const Toast = { show };

export default Toast;
