// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SvgRepoIconCarrierSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13 24.667c-4.682 0-7.022 0-8.704-1.124a6.67 6.67 0 01-1.84-1.84C1.334 20.024 1.334 17.682 1.334 13c0-4.682 0-7.022 1.124-8.704a6.667 6.667 0 011.84-1.84C5.976 1.334 8.317 1.334 13 1.334h10c4.681 0 7.022 0 8.704 1.124a6.67 6.67 0 011.84 1.84c1.123 1.68 1.123 4.021 1.123 8.703 0 4.681 0 7.022-1.124 8.704a6.672 6.672 0 01-1.84 1.84c-1.68 1.123-4.021 1.123-8.703 1.123H13zM13 8a5 5 0 100 10M23 8a5 5 0 110 10"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
      ></path>

      <path
        d={"M13 1.333v22.5m10-22.5v22.5"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default SvgRepoIconCarrierSvgIcon;
/* prettier-ignore-end */
