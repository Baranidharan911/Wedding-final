/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function InputPrefixIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.415 10.932a5.842 5.842 0 00-1.259-1.867 5.87 5.87 0 00-1.867-1.26l-.019-.007a3.874 3.874 0 10-4.538.002l-.018.007a5.84 5.84 0 00-1.867 1.26 5.869 5.869 0 00-1.72 4.025.126.126 0 00.124.128h.938a.125.125 0 00.125-.122 4.658 4.658 0 011.372-3.192A4.656 4.656 0 017 8.532c1.253 0 2.43.488 3.316 1.374a4.658 4.658 0 011.372 3.192.124.124 0 00.125.122h.937a.125.125 0 00.125-.128 5.82 5.82 0 00-.46-2.16zM7.001 7.345a2.67 2.67 0 01-1.9-.788 2.67 2.67 0 01-.787-1.9c0-.717.28-1.392.787-1.9a2.67 2.67 0 011.9-.787c.717 0 1.392.28 1.9.787a2.67 2.67 0 01.788 1.9 2.67 2.67 0 01-.788 1.9 2.67 2.67 0 01-1.9.788z"
        }
        fill={"currentColor"}
        fillOpacity={".85"}
      ></path>
    </svg>
  );
}

export default InputPrefixIcon;
/* prettier-ignore-end */
