// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Trash2Outline1SvgIcon(props) {
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

      <g clipPath={"url(#eboIQT5_GIBMa)"} fill={"#737373"}>
        <path
          d={
            "M17.5 5h-4.167V3.608a2.017 2.017 0 00-2.084-1.941h-2.5a2.017 2.017 0 00-2.083 1.941V5H2.499a.833.833 0 000 1.667h.834v9.166a2.5 2.5 0 002.5 2.5h8.333a2.5 2.5 0 002.5-2.5V6.667h.833A.833.833 0 1017.5 5zM8.332 3.608c0-.133.175-.275.416-.275h2.5c.242 0 .417.142.417.275V5H8.333V3.608zm6.666 12.225a.833.833 0 01-.833.834H5.833a.833.833 0 01-.834-.834V6.667h10v9.166z"
          }
        ></path>

        <path
          d={
            "M7.5 14.167a.833.833 0 00.833-.834V10a.833.833 0 10-1.667 0v3.333a.833.833 0 00.833.834zm5 0a.833.833 0 00.833-.834V10a.833.833 0 10-1.667 0v3.333a.833.833 0 00.833.834z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"eboIQT5_GIBMa"}>
          <path fill={"#fff"} d={"M0 0h20v20H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Trash2Outline1SvgIcon;
/* prettier-ignore-end */
