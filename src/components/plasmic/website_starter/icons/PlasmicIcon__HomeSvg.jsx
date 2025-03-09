// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function HomeSvgIcon(props) {
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
          "M28.537 11.373L15.755 1.266a1.208 1.208 0 00-1.51 0L1.463 11.398a1.23 1.23 0 00-.463.974v15.395c0 .327.128.64.357.872.228.231.538.361.86.361h7.913v-7.396c0-1.307.513-2.562 1.427-3.486A4.839 4.839 0 0115 16.674c1.291 0 2.53.519 3.443 1.444a4.962 4.962 0 011.426 3.486V29h7.913c.323 0 .633-.13.861-.361a1.24 1.24 0 00.357-.872V12.36a1.245 1.245 0 00-.463-.986z"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HomeSvgIcon;
/* prettier-ignore-end */
