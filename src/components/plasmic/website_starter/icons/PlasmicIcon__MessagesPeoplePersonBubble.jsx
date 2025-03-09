// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MessagesPeoplePersonBubbleIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 141 141"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M78.996 61.506a16.072 16.072 0 0014.626 8.776 18.7 18.7 0 0014.626-8.776c40.952 0 37.266-58.503-.586-58.503a26.046 26.046 0 00-19.89 8.776 26.509 26.509 0 00-22.758-.234c-7.254 3.334-12.578 9.828-14.509 17.55M99.53 93.682c3.218 0 5.85-2.632 5.85-5.85 0-3.218-2.632-5.85-5.85-5.85-3.218 0-5.85 2.632-5.85 5.85 0 3.218 2.632 5.85 5.85 5.85zM3 137.56a50.484 50.484 0 014.095-19.423c2.867-5.733 14.86-9.712 29.895-15.269 4.037-1.521 3.394-12.11 1.58-14.1a30.082 30.082 0 01-7.84-23.284c-.526-5.44 1.23-10.823 4.856-14.86 3.628-4.095 8.717-6.493 14.158-6.61a19.56 19.56 0 0114.216 6.61 19.61 19.61 0 014.856 14.919c.82 8.541-1.99 16.966-7.84 23.284-1.813 1.99-2.456 12.578 1.58 14.099 15.035 5.558 27.029 9.536 29.895 15.269a50.485 50.485 0 014.095 19.423H3v-.058z"
        }
        stroke={"currentColor"}
        strokeWidth={"6"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M114.156 33.717c.819 0 1.462.644 1.462 1.462 0 .82-.643 1.463-1.462 1.463a1.449 1.449 0 01-1.463-1.463c0-.819.644-1.462 1.463-1.462zm-17.551 0c.819 0 1.462.644 1.462 1.462 0 .82-.643 1.463-1.462 1.463-.82 0-1.463-.643-1.463-1.463 0-.819.644-1.462 1.463-1.462zm-17.551 0c.819 0 1.462.644 1.462 1.462 0 .82-.643 1.463-1.462 1.463-.82 0-1.463-.643-1.463-1.463 0-.819.644-1.462 1.463-1.462zm0 61.428c.819 0 1.462.644 1.462 1.463 0 .819-.643 1.462-1.462 1.462-.82 0-1.463-.643-1.463-1.462 0-.82.644-1.463 1.463-1.463z"
        }
        stroke={"currentColor"}
        strokeWidth={"6"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MessagesPeoplePersonBubbleIcon;
/* prettier-ignore-end */
