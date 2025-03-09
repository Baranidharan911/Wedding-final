// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SuitcaseSvgrepoComSvgIcon(props) {
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
          "M8 7v-.8c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C9.52 3 10.08 3 11.2 3h1.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C16 4.52 16 5.08 16 6.2V7M7 21V7.002M17 21V7M7 7.002C7.244 7 7.51 7 7.8 7H16m-9 .002c-1.165.008-1.831.055-2.362.325a3 3 0 00-1.311 1.311C3 9.28 3 10.12 3 11.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C5.28 21 6.12 21 7.8 21h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C21 18.72 21 17.88 21 16.2v-4.4c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C18.72 7 17.88 7 16.2 7h.8m0 0h-1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SuitcaseSvgrepoComSvgIcon;
/* prettier-ignore-end */
