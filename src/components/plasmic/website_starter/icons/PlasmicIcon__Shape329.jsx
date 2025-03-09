// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Shape329Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 27"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.392 25.64a1.234 1.234 0 01-1.741 0L3.16 13.545a7.257 7.257 0 01-1.38-8.442 7.257 7.257 0 0111.733-1.911l2.008 2.031 2.032-2.031a7.257 7.257 0 0111.708 1.91 7.258 7.258 0 01-1.379 8.443L16.393 25.64z"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Shape329Icon;
/* prettier-ignore-end */
