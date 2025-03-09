// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function EnquiriesSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 23"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M29 4.5v15.6c0 .636-.246 1.247-.683 1.697a2.3 2.3 0 01-1.65.703H3.333a2.301 2.301 0 01-1.65-.703A2.435 2.435 0 011 20.1V4.5"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M29 4.5V3.333A2.334 2.334 0 0026.667 1H3.333A2.333 2.333 0 001 3.333V4.5l12.133 7.607a3.546 3.546 0 003.71 0L29 4.5z"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default EnquiriesSvgIcon;
/* prettier-ignore-end */
