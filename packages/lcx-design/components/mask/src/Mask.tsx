import { PropagationEvent } from "../../../utils/width-stop-propagation";
import { animated, useSpring } from "@react-spring/web";
// import { merge } from "lodash";
// import useNamespace from "../../../utils/useNamespace";
import React, { ReactNode } from "react";

export type MaskProps = {
  visible?: boolean;
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  destroyOnClose?: boolean;
  forceRender?: boolean;
  color?: "white" | "black" | (string & {});
  afterShow?: () => void;
  afterClose?: () => void;
  stopPropagation?: PropagationEvent[];
  opacity?: "default" | "thin" | "thick" | number;
  children?: ReactNode;
};

// const ns = useNamespace("mask");

// const colorRecord: Record<string, string> = {
//   black: "0, 0, 0",
//   white: "255, 255, 255",
// };

// const opacityRecord = {
//   default: 0.55,
//   thin: 0.35,
//   thick: 0.75,
// };

// const defaultProps = {
//   visible: true,
//   destroyOnClose: false,
//   forceRender: false,
//   color: "black",
//   opacity: "default",
//   disableBodyScroll: true,
//   getContainer: null,
//   stopPropagation: ["click"],
// };

export default function Mask() {
  // const props = merge(defaultProps, p);

  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    });
  };
  // const background = useMemo(() => {
  //   const opacity = opacityRecord[props.opacity] ?? props.opacity;
  //   const rgb = colorRecord[props.color];
  //   return rgb ? `rgba(${rgb}, ${opacity})` : props.color;
  // }, [props.color, props.opacity]);

  // const { opacity } = useSpring({
  //   opacity: props.visible ? 1 : 0,
  //   config: {
  //     precision: 0.01,
  //     mass: 1,
  //     tension: 250,
  //     friction: 30,
  //     clamp: true,
  //   },
  // });

  return (
    <animated.div
      onClick={handleClick}
      style={{
        width: 80,
        height: 80,
        background: "#ff6d6d",
        borderRadius: 8,
        ...springs,
      }}
    />
  );
}
