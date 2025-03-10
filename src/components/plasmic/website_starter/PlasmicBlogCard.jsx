// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: i8KuCHvKrwawZpBmyovrv7
// Component: h5ecEwLPChDt
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
import sty from "./PlasmicBlogCard.module.css"; // plasmic-import: h5ecEwLPChDt/css
import DividerIcon from "./icons/PlasmicIcon__Divider"; // plasmic-import: idEdcggxEJL0/icon

createPlasmicElementProxy;

export const PlasmicBlogCard__VariantProps = new Array();

export const PlasmicBlogCard__ArgProps = new Array();

const $$ = {};

function PlasmicBlogCard__RenderFunc(props) {
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
      as={"div"}
      data-plasmic-name={"blog"}
      data-plasmic-override={overrides.blog}
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
        sty.blog
      )}
    >
      <div
        data-plasmic-name={"cardImage"}
        data-plasmic-override={overrides.cardImage}
        className={classNames(projectcss.all, sty.cardImage)}
      >
        <div
          data-plasmic-name={"image"}
          data-plasmic-override={overrides.image}
          className={classNames(projectcss.all, sty.image)}
        />
      </div>
      <Stack__
        as={"div"}
        data-plasmic-name={"blogContent"}
        data-plasmic-override={overrides.blogContent}
        hasGap={true}
        className={classNames(projectcss.all, sty.blogContent)}
      >
        <Stack__
          as={"div"}
          data-plasmic-name={"tags"}
          data-plasmic-override={overrides.tags}
          hasGap={true}
          className={classNames(projectcss.all, sty.tags)}
        >
          <div
            data-plasmic-name={"linkButton"}
            data-plasmic-override={overrides.linkButton}
            className={classNames(projectcss.all, sty.linkButton)}
          >
            <div
              data-plasmic-name={"button2"}
              data-plasmic-override={overrides.button2}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.button2
              )}
            >
              {"Trending"}
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__pMe0B)}>
            <DividerIcon
              className={classNames(projectcss.all, sty.svg__nydJi)}
              role={"img"}
            />
          </div>
          {false ? (
            <div
              data-plasmic-name={"linkButton2"}
              data-plasmic-override={overrides.linkButton2}
              className={classNames(projectcss.all, sty.linkButton2)}
            >
              <div
                data-plasmic-name={"button3"}
                data-plasmic-override={overrides.button3}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.button3
                )}
              >
                {"Jewellery"}
              </div>
            </div>
          ) : null}
          <div className={classNames(projectcss.all, sty.freeBox__sdDM)}>
            {false ? (
              <DividerIcon
                className={classNames(projectcss.all, sty.svg__aLr5C)}
                role={"img"}
              />
            ) : null}
          </div>
          <div
            data-plasmic-name={"linkButton3"}
            data-plasmic-override={overrides.linkButton3}
            className={classNames(projectcss.all, sty.linkButton3)}
          >
            <div
              data-plasmic-name={"button4"}
              data-plasmic-override={overrides.button4}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.button4
              )}
            >
              {"Fashion"}
            </div>
          </div>
        </Stack__>
        <Stack__
          as={"div"}
          data-plasmic-name={"content"}
          data-plasmic-override={overrides.content}
          hasGap={true}
          className={classNames(projectcss.all, sty.content)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__oR39O
            )}
          >
            {"Seal Your Love with these Valentine\u2019s Gifts under 5000"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__dkMUg,
              "truncateText"
            )}
          >
            {
              "Looking for the perfect Valentine\u2019s Day gift without breaking the bank? Look no further! In this article, we\u2019ll explore a curated selection of thoughtful and romantic gifts, all priced under 5000. From stylish outfits to trendy footwear and irresistible lifestyle products, there\u2019s something for every budget and taste. Whether you\u2019re shopping for your significant other, a friend, or even treating yourself, these affordable options are sure to make this Valentine\u2019s Day extra special."
            }
          </div>
        </Stack__>
        <Stack__
          as={"div"}
          data-plasmic-name={"profile"}
          data-plasmic-override={overrides.profile}
          hasGap={true}
          className={classNames(projectcss.all, sty.profile)}
        >
          <div
            data-plasmic-name={"profile2"}
            data-plasmic-override={overrides.profile2}
            className={classNames(projectcss.all, sty.profile2)}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__dbboE
            )}
          >
            {"Kiran"}
          </div>
        </Stack__>
      </Stack__>
    </Stack__>
  );
}

const PlasmicDescendants = {
  blog: [
    "blog",
    "cardImage",
    "image",
    "blogContent",
    "tags",
    "linkButton",
    "button2",
    "linkButton2",
    "button3",
    "linkButton3",
    "button4",
    "content",
    "profile",
    "profile2"
  ],

  cardImage: ["cardImage", "image"],
  image: ["image"],
  blogContent: [
    "blogContent",
    "tags",
    "linkButton",
    "button2",
    "linkButton2",
    "button3",
    "linkButton3",
    "button4",
    "content",
    "profile",
    "profile2"
  ],

  tags: [
    "tags",
    "linkButton",
    "button2",
    "linkButton2",
    "button3",
    "linkButton3",
    "button4"
  ],

  linkButton: ["linkButton", "button2"],
  button2: ["button2"],
  linkButton2: ["linkButton2", "button3"],
  button3: ["button3"],
  linkButton3: ["linkButton3", "button4"],
  button4: ["button4"],
  content: ["content"],
  profile: ["profile", "profile2"],
  profile2: ["profile2"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicBlogCard__ArgProps,
          internalVariantPropNames: PlasmicBlogCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBlogCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "blog") {
    func.displayName = "PlasmicBlogCard";
  } else {
    func.displayName = `PlasmicBlogCard.${nodeName}`;
  }
  return func;
}

export const PlasmicBlogCard = Object.assign(
  // Top-level PlasmicBlogCard renders the root element
  makeNodeComponent("blog"),
  {
    // Helper components rendering sub-elements
    cardImage: makeNodeComponent("cardImage"),
    image: makeNodeComponent("image"),
    blogContent: makeNodeComponent("blogContent"),
    tags: makeNodeComponent("tags"),
    linkButton: makeNodeComponent("linkButton"),
    button2: makeNodeComponent("button2"),
    linkButton2: makeNodeComponent("linkButton2"),
    button3: makeNodeComponent("button3"),
    linkButton3: makeNodeComponent("linkButton3"),
    button4: makeNodeComponent("button4"),
    content: makeNodeComponent("content"),
    profile: makeNodeComponent("profile"),
    profile2: makeNodeComponent("profile2"),
    // Metadata about props expected for PlasmicBlogCard
    internalVariantProps: PlasmicBlogCard__VariantProps,
    internalArgProps: PlasmicBlogCard__ArgProps
  }
);

export default PlasmicBlogCard;
/* prettier-ignore-end */
