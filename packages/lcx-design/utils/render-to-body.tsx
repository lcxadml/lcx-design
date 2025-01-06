import React, {
  ReactElement,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { createRoot } from "react-dom/client";

export type ImperativeHandler = {
  close: () => void;
  replace: (element: ReactElement) => void;
  isRendered?: () => boolean;
};

export const renderToBody = (element: ReactElement) => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  const root = createRoot(container);
  root.render(element);
  return () => {
    root.unmount();
  };
};

export const renderImperatively = (element: ReactElement) => {
  const Wrapper = React.forwardRef<ImperativeHandler>((_, ref) => {
    const [visible, setVisible] = useState(false);
    const [elementToRender, setElementToRender] = useState(element);
    const closeRef = useRef(false);
    const keyRef = useRef(0);

    useEffect(() => {
      if (!closeRef.current) {
        setVisible(true);
      } else {
        afterClose();
      }
    }, []);

    const onClose = () => {
      closeRef.current = true;
      setVisible(false);
    };

    const afterClose = () => {
      unmount();
    };

    useImperativeHandle(ref, () => {
      return {
        close: onClose,
        replace: (element) => {
          keyRef.current++;
          setElementToRender(element);
        },
      };
    });

    return React.cloneElement(elementToRender, {
      ...elementToRender.props,
      key: keyRef.current,
      visible,
      onClose,
      afterClose,
    });
  });

  const wrapperRef = React.createRef<ImperativeHandler>();

  const unmount = renderToBody(<Wrapper ref={wrapperRef} />);

  return {
    close: async () => {
      if (!wrapperRef.current) {
        unmount();
      } else {
        // TODO: close占位
      }
    },
    replace: (element) => {
      wrapperRef.current?.replace(element);
    },
    isRendered: () => !!wrapperRef.current,
  };
};
