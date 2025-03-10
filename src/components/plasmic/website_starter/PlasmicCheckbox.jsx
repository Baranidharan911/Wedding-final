// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: i8KuCHvKrwawZpBmyovrv7
// Component: TxcnzgUyyoud
import * as React from "react";
import {
  PlasmicIcon as PlasmicIcon__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  useDollarState,
  useTrigger
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: i8KuCHvKrwawZpBmyovrv7/projectcss
import sty from "./PlasmicCheckbox.module.css"; // plasmic-import: TxcnzgUyyoud/css
import SquareMinusSvgIcon from "./icons/PlasmicIcon__SquareMinusSvg"; // plasmic-import: -5cI46SGiQ-m/icon
import SquareCheckFilledSvgIcon from "./icons/PlasmicIcon__SquareCheckFilledSvg"; // plasmic-import: 8JZYMymbjKcP/icon
import SquareSvgIcon from "./icons/PlasmicIcon__SquareSvg"; // plasmic-import: kgGyNUP6yO7h/icon

createPlasmicElementProxy;

export const PlasmicCheckbox__VariantProps = new Array(
  "noLable",
  "isDisabled",
  "isChecked2",
  "isIndeterminate"
);

export const PlasmicCheckbox__ArgProps = new Array(
  "children",
  "name",
  "value",
  "ariaLable",
  "ariaLabelledby",
  "onChange",
  "isChecked",
  "onIsCheckedChange"
);

const $$ = {};

function PlasmicCheckbox__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "isChecked",
        type: "writable",
        variableType: "boolean",
        valueProp: "isChecked",
        onChangeProp: "onIsCheckedChange"
      },
      {
        path: "noLable",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noLable
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
      },
      {
        path: "isChecked2",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isChecked2
      },
      {
        path: "isIndeterminate",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isIndeterminate
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });
  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const [isRootFocusWithin, triggerRootFocusWithinProps] = useTrigger(
    "useFocusedWithin",
    {}
  );
  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin,
    hover_root: isRootHover,
    focusWithin_root: isRootFocusWithin
  };
  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root,
        { [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled") }
      )}
      data-plasmic-trigger-props={[
        triggerRootFocusVisibleWithinProps,
        triggerRootHoverProps,
        triggerRootFocusWithinProps
      ]}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxisChecked2]: hasVariant(
            $state,
            "isChecked2",
            "isChecked2"
          )
        })}
      >
        {(
          triggers.focusWithin_root
            ? true
            : triggers.hover_root
            ? true
            : triggers.focusVisibleWithin_root
            ? true
            : hasVariant($state, "isIndeterminate", "isIndeterminate")
            ? true
            : hasVariant($state, "isChecked2", "isChecked2")
            ? true
            : hasVariant($state, "isDisabled", "isDisabled")
            ? true
            : hasVariant($state, "noLable", "noLable")
            ? true
            : false
        ) ? (
          <PlasmicIcon__
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            PlasmicIconType={
              triggers.focusWithin_root
                ? SquareSvgIcon
                : triggers.hover_root
                ? SquareSvgIcon
                : triggers.focusVisibleWithin_root
                ? SquareSvgIcon
                : hasVariant($state, "isChecked2", "isChecked2")
                ? SquareCheckFilledSvgIcon
                : hasVariant($state, "isDisabled", "isDisabled")
                ? SquareSvgIcon
                : hasVariant($state, "noLable", "noLable")
                ? SquareSvgIcon
                : SquareMinusSvgIcon
            }
            className={classNames(projectcss.all, sty.svg, {
              [sty.svg___focusVisibleWithin]: triggers.focusVisibleWithin_root,
              [sty.svgisChecked2]: hasVariant(
                $state,
                "isChecked2",
                "isChecked2"
              ),
              [sty.svgisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.svgisIndeterminate]: hasVariant(
                $state,
                "isIndeterminate",
                "isIndeterminate"
              ),
              [sty.svgnoLable]: hasVariant($state, "noLable", "noLable")
            })}
            role={"img"}
          />
        ) : null}
      </div>
      <div
        data-plasmic-name={"labelContainer"}
        data-plasmic-override={overrides.labelContainer}
        className={classNames(projectcss.all, sty.labelContainer, {
          [sty.labelContainerisChecked2]: hasVariant(
            $state,
            "isChecked2",
            "isChecked2"
          ),
          [sty.labelContainernoLable]: hasVariant($state, "noLable", "noLable")
        })}
      >
        {renderPlasmicSlot({
          defaultContents: "Enter some text",
          value: args.children,
          className: classNames(sty.slotTargetChildren)
        })}
      </div>
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "svg", "labelContainer"],
  freeBox: ["freeBox", "svg"],
  svg: ["svg"],
  labelContainer: ["labelContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCheckbox__ArgProps,
          internalVariantPropNames: PlasmicCheckbox__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCheckbox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCheckbox";
  } else {
    func.displayName = `PlasmicCheckbox.${nodeName}`;
  }
  return func;
}

export const PlasmicCheckbox = Object.assign(
  // Top-level PlasmicCheckbox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    svg: makeNodeComponent("svg"),
    labelContainer: makeNodeComponent("labelContainer"),
    // Metadata about props expected for PlasmicCheckbox
    internalVariantProps: PlasmicCheckbox__VariantProps,
    internalArgProps: PlasmicCheckbox__ArgProps
  }
);

export default PlasmicCheckbox;
/* prettier-ignore-end */
