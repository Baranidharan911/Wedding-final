// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Share1Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 27"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.695 15.13V1m-4.89 4.891L9.695 1l4.892 4.891m-1.63 3.804h4.347a1.087 1.087 0 011.087 1.087v14.13A1.087 1.087 0 0117.304 26H2.087A1.087 1.087 0 011 24.913v-14.13a1.087 1.087 0 011.087-1.088h4.348"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Share1Icon;
/* prettier-ignore-end */
