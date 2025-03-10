// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: i8KuCHvKrwawZpBmyovrv7
// Component: 9qm4TrwcsknV
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  initializeCodeComponentStates,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { AntdSingleCollapse } from "@plasmicpkgs/antd5/skinny/registerCollapse";
import { singleCollapseHelpers as AntdSingleCollapse_Helpers } from "@plasmicpkgs/antd5/skinny/registerCollapse";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import ButtonContainer from "../../ButtonContainer"; // plasmic-import: dK0EsHLm2W5O/component
import Button2 from "../../Button2"; // plasmic-import: x0IYxFtlqF54/component
import { useScreenVariants as useScreenVariantszapf5SksSeNd } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ZAPF5sksSeNd/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: i8KuCHvKrwawZpBmyovrv7/projectcss
import sty from "./PlasmicReviewReply.module.css"; // plasmic-import: 9qm4TrwcsknV/css
import HeartSvgrepoComSvgIcon from "./icons/PlasmicIcon__HeartSvgrepoComSvg"; // plasmic-import: UPXXCJ-9pjf5/icon

createPlasmicElementProxy;

export const PlasmicReviewReply__VariantProps = new Array();

export const PlasmicReviewReply__ArgProps = new Array(
  "username",
  "userIconUrl",
  "createdAt",
  "comment",
  "likes"
);

const $$ = {};

function PlasmicReviewReply__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          username: "Raj Patel",
          createdAt: "2023-10-12T09:32:00.000Z",
          comment: "Very professional and responsive. Photos turned out great!",
          likes: { likes: ["1", "2", "3"] }
        },
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
        path: "collapse12.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,
        onMutate: generateOnMutateForSpec("open", AntdSingleCollapse_Helpers)
      },
      {
        path: "reply.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
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
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantszapf5SksSeNd()
  });
  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"review"}
      data-plasmic-override={overrides.review}
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
        sty.review
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"header"}
        data-plasmic-override={overrides.header}
        hasGap={true}
        className={classNames(projectcss.all, sty.header)}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__nMWzf)}
        >
          <PlasmicImg__
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"40px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"40px"}
            height={"40"}
            loading={"lazy"}
            width={"40"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___4Jbij
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.username;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "Priya Sharma";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </Stack__>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__oYov1
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return (() => {
                  const currentDate = new Date();
                  const createdAtDate = new Date($props.createdAt);
                  const timeDiff =
                    currentDate.getTime() - createdAtDate.getTime();
                  const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
                  const hoursDiff = Math.floor(timeDiff / (1000 * 3600));
                  const monthsDiff = Math.floor(daysDiff / 30);
                  if (monthsDiff >= 11) {
                    return createdAtDate.toDateString();
                  } else if (monthsDiff >= 1) {
                    return `${monthsDiff} months ago`;
                  } else if (daysDiff < 2 && hoursDiff > 1) {
                    return `${hoursDiff} hours ago`;
                  } else if (hoursDiff <= 1) {
                    return "Just now";
                  } else {
                    return `${daysDiff} days ago`;
                  }
                })();
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
      </Stack__>
      <div
        data-plasmic-name={"main"}
        data-plasmic-override={overrides.main}
        className={classNames(projectcss.all, sty.main)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___1Uva
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.comment;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
        <div
          data-plasmic-name={"replyLikes"}
          data-plasmic-override={overrides.replyLikes}
          className={classNames(projectcss.all, sty.replyLikes)}
        >
          <div className={classNames(projectcss.all, sty.freeBox___87TFg)}>
            {(() => {
              const child$Props = {
                bordered: false,
                className: classNames("__wab_instance", sty.collapse12),
                defaultOpen: false,
                ghost: true,
                label2: (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__muKnW
                    )}
                  >
                    {"Reply"}
                  </div>
                ),

                onChange: async (...eventArgs) => {
                  generateStateOnChangePropForCodeComponents(
                    $state,
                    "open",
                    ["collapse12", "open"],
                    AntdSingleCollapse_Helpers
                  ).apply(null, eventArgs);
                },
                open: generateStateValueProp($state, ["collapse12", "open"]),
                showArrow: false
              };
              initializeCodeComponentStates(
                $state,
                [
                  {
                    name: "open",
                    plasmicStateName: "collapse12.open"
                  }
                ],

                [],
                AntdSingleCollapse_Helpers ?? {},
                child$Props
              );
              return (
                <AntdSingleCollapse
                  data-plasmic-name={"collapse12"}
                  data-plasmic-override={overrides.collapse12}
                  {...child$Props}
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___3I6B4)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__j3QG)}
                    >
                      {(() => {
                        const child$Props = {
                          bordered: false,
                          className: classNames("__wab_instance", sty.reply),
                          onChange: async (...eventArgs) => {
                            generateStateOnChangePropForCodeComponents(
                              $state,
                              "value",
                              ["reply", "value"],
                              AntdInput_Helpers
                            ).apply(null, eventArgs);
                          },
                          placeholder: "Reply to review",
                          value: generateStateValueProp($state, [
                            "reply",
                            "value"
                          ])
                        };
                        initializeCodeComponentStates(
                          $state,
                          [
                            {
                              name: "value",
                              plasmicStateName: "reply.value"
                            }
                          ],

                          [],
                          AntdInput_Helpers ?? {},
                          child$Props
                        );
                        return (
                          <AntdInput
                            data-plasmic-name={"reply"}
                            data-plasmic-override={overrides.reply}
                            {...child$Props}
                          />
                        );
                      })()}
                    </div>
                    <ButtonContainer
                      data-plasmic-name={"buttonContainer"}
                      data-plasmic-override={overrides.buttonContainer}
                      className={classNames(
                        "__wab_instance",
                        sty.buttonContainer
                      )}
                    >
                      <Button2
                        data-plasmic-name={"replyButton"}
                        data-plasmic-override={overrides.replyButton}
                        className={classNames(
                          "__wab_instance",
                          sty.replyButton
                        )}
                        color={"red"}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__wdgC
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "#FFFFFFE0" }}
                            >
                              {"Reply"}
                            </span>
                          </React.Fragment>
                        </div>
                      </Button2>
                    </ButtonContainer>
                  </Stack__>
                </AntdSingleCollapse>
              );
            })()}
          </div>
          {false ? (
            <Stack__
              as={"div"}
              data-plasmic-name={"likes2"}
              data-plasmic-override={overrides.likes2}
              hasGap={true}
              className={classNames(projectcss.all, sty.likes2)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__iFLr
                )}
              >
                {""}
              </div>
              <HeartSvgrepoComSvgIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />
            </Stack__>
          ) : null}
        </div>
        <div
          data-plasmic-name={"replies"}
          data-plasmic-override={overrides.replies}
          className={classNames(projectcss.all, sty.replies)}
        />
      </div>
    </Stack__>
  );
}

const PlasmicDescendants = {
  review: [
    "review",
    "header",
    "img",
    "main",
    "replyLikes",
    "collapse12",
    "reply",
    "buttonContainer",
    "replyButton",
    "likes2",
    "svg",
    "replies"
  ],

  header: ["header", "img"],
  img: ["img"],
  main: [
    "main",
    "replyLikes",
    "collapse12",
    "reply",
    "buttonContainer",
    "replyButton",
    "likes2",
    "svg",
    "replies"
  ],

  replyLikes: [
    "replyLikes",
    "collapse12",
    "reply",
    "buttonContainer",
    "replyButton",
    "likes2",
    "svg"
  ],

  collapse12: ["collapse12", "reply", "buttonContainer", "replyButton"],
  reply: ["reply"],
  buttonContainer: ["buttonContainer", "replyButton"],
  replyButton: ["replyButton"],
  likes2: ["likes2", "svg"],
  svg: ["svg"],
  replies: ["replies"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicReviewReply__ArgProps,
          internalVariantPropNames: PlasmicReviewReply__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicReviewReply__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "review") {
    func.displayName = "PlasmicReviewReply";
  } else {
    func.displayName = `PlasmicReviewReply.${nodeName}`;
  }
  return func;
}

export const PlasmicReviewReply = Object.assign(
  // Top-level PlasmicReviewReply renders the root element
  makeNodeComponent("review"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    img: makeNodeComponent("img"),
    main: makeNodeComponent("main"),
    replyLikes: makeNodeComponent("replyLikes"),
    collapse12: makeNodeComponent("collapse12"),
    reply: makeNodeComponent("reply"),
    buttonContainer: makeNodeComponent("buttonContainer"),
    replyButton: makeNodeComponent("replyButton"),
    likes2: makeNodeComponent("likes2"),
    svg: makeNodeComponent("svg"),
    replies: makeNodeComponent("replies"),
    // Metadata about props expected for PlasmicReviewReply
    internalVariantProps: PlasmicReviewReply__VariantProps,
    internalArgProps: PlasmicReviewReply__ArgProps
  }
);

export default PlasmicReviewReply;
/* prettier-ignore-end */
