// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PencilSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.244 2.053l4.24 4.24-15 15.05-4.24-4.24 15-15.05zM3.194 17.102l-2.12 6.36 6.36-2.12-4.24-4.24zm19.29-10.809l-4.24-4.24.71-.71a3 3 0 014.24 4.24l-.71.71z"
        }
        fill={"#737373"}
        stroke={"#fff"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PencilSvgIcon;
/* prettier-ignore-end */
