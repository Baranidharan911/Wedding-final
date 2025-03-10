// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: i8KuCHvKrwawZpBmyovrv7
// Component: nuhlqgZ1e15o
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: i8KuCHvKrwawZpBmyovrv7/projectcss
import sty from "./PlasmicWvButton2.module.css"; // plasmic-import: nuhlqgZ1e15o/css
import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: 1nntRFE4N1ku/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: hl3Nu5D0FvuO/icon

createPlasmicElementProxy;

export const PlasmicWvButton2__VariantProps = new Array();

export const PlasmicWvButton2__ArgProps = new Array();

const $$ = {};

function PlasmicWvButton2__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  return (
    <Stack__
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      {false ? (
        <div
          data-plasmic-name={"startIconContainer"}
          data-plasmic-override={overrides.startIconContainer}
          className={classNames(projectcss.all, sty.startIconContainer)}
        >
          <CheckSvgIcon
            className={classNames(projectcss.all, sty.svg__r4Zua)}
            role={"img"}
          />
        </div>
      ) : null}
      <div
        data-plasmic-name={"contentContainer"}
        data-plasmic-override={overrides.contentContainer}
        className={classNames(projectcss.all, sty.contentContainer)}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"Button"}
        </div>
      </div>
      {false ? (
        <div
          data-plasmic-name={"endIconContainer"}
          data-plasmic-override={overrides.endIconContainer}
          className={classNames(projectcss.all, sty.endIconContainer)}
        >
          <Icon38Icon
            className={classNames(projectcss.all, sty.svg__f4NN8)}
            role={"img"}
          />
        </div>
      ) : null}
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "startIconContainer",
    "contentContainer",
    "text",
    "endIconContainer"
  ],

  startIconContainer: ["startIconContainer"],
  contentContainer: ["contentContainer", "text"],
  text: ["text"],
  endIconContainer: ["endIconContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicWvButton2__ArgProps,
          internalVariantPropNames: PlasmicWvButton2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicWvButton2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWvButton2";
  } else {
    func.displayName = `PlasmicWvButton2.${nodeName}`;
  }
  return func;
}

export const PlasmicWvButton2 = Object.assign(
  // Top-level PlasmicWvButton2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    startIconContainer: makeNodeComponent("startIconContainer"),
    contentContainer: makeNodeComponent("contentContainer"),
    text: makeNodeComponent("text"),
    endIconContainer: makeNodeComponent("endIconContainer"),
    // Metadata about props expected for PlasmicWvButton2
    internalVariantProps: PlasmicWvButton2__VariantProps,
    internalArgProps: PlasmicWvButton2__ArgProps
  }
);

export default PlasmicWvButton2;
/* prettier-ignore-end */
