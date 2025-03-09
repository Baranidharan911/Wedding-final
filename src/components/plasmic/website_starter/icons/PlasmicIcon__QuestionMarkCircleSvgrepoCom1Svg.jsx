// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function QuestionMarkCircleSvgrepoCom1SvgIcon(props) {
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

      <circle
        cx={"12"}
        cy={"12"}
        r={"9"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
      ></circle>

      <path
        stroke={"currentColor"}
        strokeLinejoin={"round"}
        strokeWidth={"3"}
        d={"M12 16h.01v.01H12z"}
      ></path>

      <path
        d={
          "M10.586 7.586c.39-.39.9-.585 1.41-.586a1.991 1.991 0 011.418.586c.39.39.586.902.586 1.414a1.99 1.99 0 01-.586 1.414 1.993 1.993 0 01-1.418.586L12 12"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default QuestionMarkCircleSvgrepoCom1SvgIcon;
/* prettier-ignore-end */
