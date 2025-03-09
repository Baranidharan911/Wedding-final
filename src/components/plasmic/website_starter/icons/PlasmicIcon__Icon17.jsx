// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon17Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 36"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M35.494 14.91l-.01-.037L30.225 1.51A1.81 1.81 0 0028.5.234H7.181a1.81 1.81 0 00-1.73 1.294L.536 14.756l-.015.033-.009.038c-.06.23-.08.464-.047.693a3.61 3.61 0 00-.01.225v17.152a2.855 2.855 0 002.85 2.85h29.4c1.571 0 2.85-1.28 2.855-2.85V15.745c0-.06 0-.122-.004-.173.019-.23 0-.45-.061-.661zm-13.866-2.015l-.014.736c-.037 2.105-1.49 3.52-3.614 3.52-1.036 0-1.926-.332-2.569-.965-.642-.633-.993-1.514-1.012-2.555l-.014-.736H4.758l3.727-9.06h18.712l3.83 9.06h-9.399zm-17.578 3.6h7.374c1.139 2.677 3.562 4.257 6.58 4.257 1.58 0 3.048-.441 4.234-1.275 1.04-.732 1.851-1.754 2.376-2.982h7.336v15.652H4.05V16.495z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon17Icon;
/* prettier-ignore-end */
