// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CrossSvgrepoComSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 -0.5 25 25"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.97 16.47a.75.75 0 101.06 1.06l-1.06-1.06zm6.06-3.94a.75.75 0 10-1.06-1.06l1.06 1.06zm-1.06-1.06a.75.75 0 101.06 1.06l-1.06-1.06zm6.06-3.94a.75.75 0 00-1.06-1.06l1.06 1.06zm-5 3.94a.75.75 0 10-1.06 1.06l1.06-1.06zm3.94 6.06a.75.75 0 101.06-1.06l-1.06 1.06zm-5-5a.75.75 0 101.06-1.06l-1.06 1.06zM8.03 6.47a.75.75 0 00-1.06 1.06l1.06-1.06zm0 11.06l5-5-1.06-1.06-5 5 1.06 1.06zm5-5l5-5-1.06-1.06-5 5 1.06 1.06zm-1.06 0l5 5 1.06-1.06-5-5-1.06 1.06zm1.06-1.06l-5-5-1.06 1.06 5 5 1.06-1.06z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CrossSvgrepoComSvgIcon;
/* prettier-ignore-end */
