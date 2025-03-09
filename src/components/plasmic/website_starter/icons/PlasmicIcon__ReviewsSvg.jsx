// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ReviewsSvgIcon(props) {
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
          "M11.875 13.167h-4.75a.792.792 0 000 1.583h4.75a.792.792 0 000-1.583zm-4.75-1.584H9.5A.792.792 0 009.5 10H7.125a.792.792 0 100 1.583z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M15.628 7.095l-4.307-4.75a.792.792 0 00-.586-.262H5.194a2.003 2.003 0 00-2.027 1.98v11.875a2.003 2.003 0 002.027 1.979h8.613a2.001 2.001 0 002.027-1.98V7.626a.792.792 0 00-.206-.53zm-4.544-2.637l2.169 2.375h-1.584a.625.625 0 01-.585-.673V4.458zm2.723 11.875H5.194a.42.42 0 01-.444-.395V4.063a.42.42 0 01.444-.396H9.5V6.16a2.209 2.209 0 002.146 2.257h2.604v7.52a.42.42 0 01-.443.396z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ReviewsSvgIcon;
/* prettier-ignore-end */
