// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function WhatsappSvgrepoComSvgIcon(props) {
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
          "M17.6 6.32A7.851 7.851 0 0012 4a7.94 7.94 0 00-6.88 11.89L4 20l4.2-1.1a7.93 7.93 0 003.79 1 8 8 0 008-7.93 8 8 0 00-2.39-5.65zM12 18.53a6.58 6.58 0 01-3.36-.92l-.24-.15-2.49.66.66-2.43-.16-.25a6.6 6.6 0 0110.25-8.17 6.65 6.65 0 012 4.66 6.66 6.66 0 01-6.66 6.6zm3.61-4.94c-.2-.1-1.17-.58-1.35-.64-.18-.06-.32-.1-.45.1a9.004 9.004 0 01-.63.77c-.11.14-.23.15-.43 0a5.33 5.33 0 01-2.69-2.35c-.21-.35.2-.33.58-1.08a.38.38 0 000-.35c0-.1-.45-1.08-.61-1.47-.16-.39-.32-.33-.45-.34h-.39a.71.71 0 00-.53.25A2.19 2.19 0 008 10.17a3.82 3.82 0 00.81 2.05 8.89 8.89 0 003.39 3 3.85 3.85 0 002.38.5 1.999 1.999 0 001.33-.94 1.62 1.62 0 00.12-.94c-.09-.1-.22-.15-.42-.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WhatsappSvgrepoComSvgIcon;
/* prettier-ignore-end */
