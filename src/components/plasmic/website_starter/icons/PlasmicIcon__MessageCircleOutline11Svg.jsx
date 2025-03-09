// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MessageCircleOutline11SvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#4Ls4L4coKjmya)"} fill={"#737373"}>
        <path
          d={
            "M10 10.833a.833.833 0 100-1.666.833.833 0 000 1.666zm3.333 0a.833.833 0 100-1.666.833.833 0 000 1.666zm-6.666 0a.833.833 0 100-1.666.833.833 0 000 1.666z"
          }
        ></path>

        <path
          d={
            "M15.892 4.108a8.333 8.333 0 00-13.567 9.167c.08.166.106.352.075.533l-.733 3.525a.834.834 0 00.504.942.831.831 0 00.329.058h.167l3.566-.716a1.05 1.05 0 01.534.075 8.333 8.333 0 009.166-13.567l-.041-.017zm.691 6.967a6.666 6.666 0 01-9.166 5.067 2.717 2.717 0 00-1.042-.217 2.852 2.852 0 00-.467.042l-2.35.475.475-2.35a2.575 2.575 0 00-.175-1.509 6.667 6.667 0 1112.493-4.63 6.666 6.666 0 01.232 3.122z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"4Ls4L4coKjmya"}>
          <path fill={"#fff"} d={"M0 0h20v20H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default MessageCircleOutline11SvgIcon;
/* prettier-ignore-end */
