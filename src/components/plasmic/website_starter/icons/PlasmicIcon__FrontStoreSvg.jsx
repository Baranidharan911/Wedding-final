// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FrontStoreSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.25 2.875h-9.5A2.375 2.375 0 002.375 5.25v9.5a2.375 2.375 0 002.375 2.375h9.5a2.375 2.375 0 002.375-2.375v-9.5a2.375 2.375 0 00-2.375-2.375zm.792 11.875a.792.792 0 01-.792.792h-9.5a.792.792 0 01-.792-.792V9.208h11.084v5.542zM3.958 7.625V5.25a.792.792 0 01.792-.792h9.5a.792.792 0 01.792.792v2.375H3.958z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M6.334 6.857a.792.792 0 100-1.583.792.792 0 000 1.583zm3.166 0a.792.792 0 100-1.583.792.792 0 000 1.583z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FrontStoreSvgIcon;
/* prettier-ignore-end */
