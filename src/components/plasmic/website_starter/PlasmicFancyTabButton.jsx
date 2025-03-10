// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: i8KuCHvKrwawZpBmyovrv7
// Component: PpEocgXk_d5g
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant,
  renderPlasmicSlot,
  useTrigger
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { useScreenVariants as useScreenVariantszapf5SksSeNd } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ZAPF5sksSeNd/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: i8KuCHvKrwawZpBmyovrv7/projectcss
import sty from "./PlasmicFancyTabButton.module.css"; // plasmic-import: PpEocgXk_d5g/css

createPlasmicElementProxy;

export const PlasmicFancyTabButton__VariantProps = new Array();

export const PlasmicFancyTabButton__ArgProps = new Array("children");

const $$ = {};

function PlasmicFancyTabButton__RenderFunc(props) {
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
  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantszapf5SksSeNd()
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames(projectcss.all, projectcss.button, sty.button)}
      >
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          {renderPlasmicSlot({
            defaultContents: "Alpha",
            value: args.children,
            className: classNames(sty.slotTargetChildren)
          })}
        </div>
        {(
          triggers.hover_root
            ? true
            : hasVariant(globalVariants, "screen", "mobileOnly")
            ? true
            : false
        ) ? (
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {"-->"}
          </div>
        ) : null}
      </button>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "button", "freeBox", "text"],
  button: ["button", "freeBox", "text"],
  freeBox: ["freeBox"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicFancyTabButton__ArgProps,
          internalVariantPropNames: PlasmicFancyTabButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFancyTabButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFancyTabButton";
  } else {
    func.displayName = `PlasmicFancyTabButton.${nodeName}`;
  }
  return func;
}

export const PlasmicFancyTabButton = Object.assign(
  // Top-level PlasmicFancyTabButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicFancyTabButton
    internalVariantProps: PlasmicFancyTabButton__VariantProps,
    internalArgProps: PlasmicFancyTabButton__ArgProps
  }
);

export default PlasmicFancyTabButton;
/* prettier-ignore-end */
