// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function HomeSvg2Icon(props) {
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
          "M7.125 2.875H3.958a1.583 1.583 0 00-1.583 1.583v3.167a1.583 1.583 0 001.583 1.583h3.167a1.583 1.583 0 001.583-1.583V4.458a1.583 1.583 0 00-1.583-1.583zm-3.167 4.75V4.458h3.167v3.167H3.958zm11.084-4.75h-3.167a1.584 1.584 0 00-1.583 1.583v3.167a1.583 1.583 0 001.583 1.583h3.167a1.584 1.584 0 001.583-1.583V4.458a1.583 1.583 0 00-1.583-1.583zm-3.167 4.75V4.458h3.167v3.167h-3.167zm-4.75 3.167H3.958a1.584 1.584 0 00-1.583 1.583v3.167a1.583 1.583 0 001.583 1.583h3.167a1.583 1.583 0 001.583-1.583v-3.167a1.583 1.583 0 00-1.583-1.583zm-3.167 4.75v-3.167h3.167v3.167H3.958zm11.084-4.75h-3.167a1.584 1.584 0 00-1.583 1.583v3.167a1.583 1.583 0 001.583 1.583h3.167a1.583 1.583 0 001.583-1.583v-3.167a1.583 1.583 0 00-1.583-1.583zm-3.167 4.75v-3.167h3.167v3.167h-3.167z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HomeSvg2Icon;
/* prettier-ignore-end */
