// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ExclamationCircleSvgrepoComSvgIcon(props) {
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
          "M12 21a9 9 0 110-18 9 9 0 010 18zm0-16.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M12 13a.76.76 0 01-.75-.75v-3.5a.75.75 0 111.5 0v3.5A.76.76 0 0112 13zm0 3a.76.76 0 01-.75-.75v-.5a.75.75 0 111.5 0v.5A.76.76 0 0112 16z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ExclamationCircleSvgrepoComSvgIcon;
/* prettier-ignore-end */
