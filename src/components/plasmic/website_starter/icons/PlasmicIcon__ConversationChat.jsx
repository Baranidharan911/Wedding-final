// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ConversationChatIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 162 162"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M159.167 49.833c0 3.759-3.075 6.834-6.834 6.834H66.917L36.167 84V56.667H8.833C5.075 56.667 2 53.592 2 49.833v-41C2 5.075 5.075 2 8.833 2h143.5c3.759 0 6.834 3.075 6.834 6.833v41z"
        }
        stroke={"currentColor"}
        strokeWidth={"4"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M19.083 77.167H8.833C5.075 77.167 2 80.242 2 84v41c0 3.758 3.075 6.833 6.833 6.833H94.25L125 159.167v-27.334h27.333c3.759 0 6.834-3.075 6.834-6.833V84c0-3.758-3.075-6.833-6.834-6.833h-82"
        }
        stroke={"currentColor"}
        strokeWidth={"4"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ConversationChatIcon;
/* prettier-ignore-end */
