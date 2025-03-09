// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function EnquiriesSvg2Icon(props) {
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
          "M16.459 9.477L13.815 4.19a2.375 2.375 0 00-2.13-1.314h-4.37a2.375 2.375 0 00-2.13 1.314L2.541 9.477c-.11.222-.167.466-.166.713v4.56a2.375 2.375 0 002.375 2.375h9.5a2.375 2.375 0 002.375-2.375v-4.56a1.584 1.584 0 00-.166-.713zM6.603 4.894a.792.792 0 01.712-.436h4.37a.791.791 0 01.713.436l2.153 4.314h-1.884a.792.792 0 00-.792.792v2.375h-4.75V10a.792.792 0 00-.792-.792H4.45l2.154-4.314zm7.647 10.648h-9.5a.792.792 0 01-.792-.792v-3.958h1.584v2.375a.792.792 0 00.791.791h6.334a.792.792 0 00.791-.791v-2.375h1.584v3.958a.792.792 0 01-.792.792z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EnquiriesSvg2Icon;
/* prettier-ignore-end */
