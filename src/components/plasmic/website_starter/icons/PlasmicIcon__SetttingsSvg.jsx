/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SetttingsSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M24.595 9.17a2.28 2.28 0 000 1.852 2.327 2.327 0 001.352 1.219l1.535.548a2.29 2.29 0 010 4.313l-1.535.548a2.276 2.276 0 00-1.303 3.13l.706 1.475a2.291 2.291 0 01-3.045 3.046l-1.473-.707a2.314 2.314 0 00-1.864 0 2.279 2.279 0 00-1.218 1.352l-.548 1.536a2.29 2.29 0 01-4.312 0l-.548-1.535a2.28 2.28 0 00-3.13-1.304l-1.474.706a2.277 2.277 0 01-3.045-3.045L5.4 20.83a2.316 2.316 0 000-1.864 2.28 2.28 0 00-1.34-1.219L2.525 17.2a2.277 2.277 0 010-4.3l1.535-.549a2.3 2.3 0 001.303-3.13l-.706-1.475A2.28 2.28 0 017.702 4.7l1.473.695a2.228 2.228 0 001.852 0 2.278 2.278 0 001.279-1.34l.548-1.536a2.29 2.29 0 014.312 0l.548 1.536a2.278 2.278 0 001.218 1.352 2.362 2.362 0 001.863 0l1.474-.707a2.277 2.277 0 013.045 3.046l-.719 1.425z"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M14.95 20.488a5.48 5.48 0 005.375-6.552 5.483 5.483 0 00-7.473-3.995 5.48 5.48 0 00-3.383 5.065 5.483 5.483 0 005.48 5.482z"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SetttingsSvgIcon;
/* prettier-ignore-end */
