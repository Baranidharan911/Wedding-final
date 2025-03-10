// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FormsSvgrepoComSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      mirrorInRtl={"true"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M19 0H5C3.9 0 3 .9 3 2v20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 21.5c0 .28-.22.5-.5.5h-13c-.28 0-.5-.22-.5-.5v-19c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5v19z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M10 10H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1zm6 6H8c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1zm0-10h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1zm0 4h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1zm0 10H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"
        }
      ></path>
    </svg>
  );
}

export default FormsSvgrepoComSvgIcon;
/* prettier-ignore-end */
