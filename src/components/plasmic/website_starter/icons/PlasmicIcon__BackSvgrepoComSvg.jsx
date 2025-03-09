// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BackSvgrepoComSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4 10l-.707.707L2.586 10l.707-.707L4 10zm17 8a1 1 0 11-2 0h2zM8.293 15.707l-5-5 1.414-1.414 5 5-1.414 1.414zm-5-6.414l5-5 1.414 1.414-5 5-1.414-1.414zM4 9h10v2H4V9zm17 7v2h-2v-2h2zm-7-7a7 7 0 017 7h-2a5 5 0 00-5-5V9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BackSvgrepoComSvgIcon;
/* prettier-ignore-end */
