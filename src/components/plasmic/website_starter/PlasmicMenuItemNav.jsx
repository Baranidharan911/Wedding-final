// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: i8KuCHvKrwawZpBmyovrv7
// Component: tEaVxZyYK1F5
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { AntdTooltip } from "@plasmicpkgs/antd5/skinny/registerTooltip";
import Button2 from "../../Button2"; // plasmic-import: x0IYxFtlqF54/component
import { useScreenVariants as useScreenVariantszapf5SksSeNd } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ZAPF5sksSeNd/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: i8KuCHvKrwawZpBmyovrv7/projectcss
import sty from "./PlasmicMenuItemNav.module.css"; // plasmic-import: tEaVxZyYK1F5/css
import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: 1nntRFE4N1ku/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: hl3Nu5D0FvuO/icon

createPlasmicElementProxy;

export const PlasmicMenuItemNav__VariantProps = new Array();

export const PlasmicMenuItemNav__ArgProps = new Array();

const $$ = {};

function PlasmicMenuItemNav__RenderFunc(props) {
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
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantszapf5SksSeNd()
  });
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
        sty.root
      )}
    >
      <AntdTooltip
        data-plasmic-name={"tooltip"}
        data-plasmic-override={overrides.tooltip}
        className={classNames("__wab_instance", sty.tooltip)}
        title={
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__so5Lp
            )}
          >
            {"Enter some text"}
          </div>
        }
        titleText={"Tooltip contents"}
      >
        <Button2
          className={classNames("__wab_instance", sty.button2__q5Gxr)}
          color={"clear"}
          endIcon={
            <Icon38Icon
              className={classNames(projectcss.all, sty.svg__mlWca)}
              role={"img"}
            />
          }
          startIcon={
            <CheckSvgIcon
              className={classNames(projectcss.all, sty.svg__sjKjt)}
              role={"img"}
            />
          }
          submitsForm={true}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__tsrR
            )}
          >
            {"Vendors"}
          </div>
        </Button2>
      </AntdTooltip>
      <Button2
        className={classNames("__wab_instance", sty.button2__d06EU)}
        color={"clear"}
        endIcon={
          <Icon38Icon
            className={classNames(projectcss.all, sty.svg__wl2A)}
            role={"img"}
          />
        }
        startIcon={
          <CheckSvgIcon
            className={classNames(projectcss.all, sty.svg__cJsw)}
            role={"img"}
          />
        }
        submitsForm={true}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__rhLdr
          )}
        >
          {"Venues"}
        </div>
      </Button2>
      <Button2
        className={classNames("__wab_instance", sty.button2__aThU)}
        color={"clear"}
        endIcon={
          <Icon38Icon
            className={classNames(projectcss.all, sty.svg___40LkN)}
            role={"img"}
          />
        }
        startIcon={
          <CheckSvgIcon
            className={classNames(projectcss.all, sty.svg__fkTBt)}
            role={"img"}
          />
        }
        submitsForm={true}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__rv0Ob
          )}
        >
          {"Blogs"}
        </div>
      </Button2>
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: ["root", "tooltip"],
  tooltip: ["tooltip"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicMenuItemNav__ArgProps,
          internalVariantPropNames: PlasmicMenuItemNav__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMenuItemNav__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMenuItemNav";
  } else {
    func.displayName = `PlasmicMenuItemNav.${nodeName}`;
  }
  return func;
}

export const PlasmicMenuItemNav = Object.assign(
  // Top-level PlasmicMenuItemNav renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    tooltip: makeNodeComponent("tooltip"),
    // Metadata about props expected for PlasmicMenuItemNav
    internalVariantProps: PlasmicMenuItemNav__VariantProps,
    internalArgProps: PlasmicMenuItemNav__ArgProps
  }
);

export default PlasmicMenuItemNav;
/* prettier-ignore-end */
