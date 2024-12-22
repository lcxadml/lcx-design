import * as React from "react";
import { SVGProps } from "react";
const CheckCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="prefix__icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="m425.984 726.016 384-384-59.99-61.995-324.01 324.011-152.021-152.021L213.973 512zm86.016-640q176 0 301.013 125.013t125.014 301.014-125.014 301.013T512 938.069 210.987 813.056 85.973 512.043t125.014-301.014T512 86.016z"
      fill="currentColor"
    />
  </svg>
);
export default CheckCircle;
