// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: i8KuCHvKrwawZpBmyovrv7
// Component: o-FKpOvt35MV
import * as React from "react";
import {
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateStateOnChangeProp,
  generateStateValueProp,
  hasVariant,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv, useGlobalActions } from "@plasmicapp/react-web/lib/host";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";
import Spinner from "../../Spinner"; // plasmic-import: mr_E4LUxuhwI/component
import Button2 from "../../Button2"; // plasmic-import: x0IYxFtlqF54/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";
import { AntdSelect } from "@plasmicpkgs/antd5/skinny/registerSelect";
import ButtonContainer from "../../ButtonContainer"; // plasmic-import: dK0EsHLm2W5O/component
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { useScreenVariants as useScreenVariantszapf5SksSeNd } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ZAPF5sksSeNd/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: i8KuCHvKrwawZpBmyovrv7/projectcss
import sty from "./PlasmicEnquiryForm.module.css"; // plasmic-import: o-FKpOvt35MV/css
import WhatsappColorSvgrepoComSvgIcon from "./icons/PlasmicIcon__WhatsappColorSvgrepoComSvg"; // plasmic-import: ExqbLlgN8hIU/icon
import Icon11Icon from "./icons/PlasmicIcon__Icon11"; // plasmic-import: veXP99X4hLS_/icon

createPlasmicElementProxy;

export const PlasmicEnquiryForm__VariantProps = new Array("prospect");

export const PlasmicEnquiryForm__ArgProps = new Array("enquiry", "storeId");

const $$ = {};

function PlasmicEnquiryForm__RenderFunc(props) {
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
  const $globalActions = useGlobalActions?.();
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "prospect",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.prospect
      },
      {
        path: "formSelect.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "formsData",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $queries.formsInfo.data.response.data.forms.data;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return [];
              }
              throw e;
            }
          })()
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
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();
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
        sty.root,
        { [sty.rootprospect]: hasVariant($state, "prospect", "prospect") }
      )}
    >
      {(() => {
        try {
          return !$props.enquiry;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return true;
          }
          throw e;
        }
      })() ? (
        <Spinner
          data-plasmic-name={"spinner"}
          data-plasmic-override={overrides.spinner}
          className={classNames("__wab_instance", sty.spinner, {
            [sty.spinnerprospect]: hasVariant($state, "prospect", "prospect")
          })}
        />
      ) : null}
      {(() => {
        try {
          return $props.enquiry;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return true;
          }
          throw e;
        }
      })() ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__h5H9A, {
            [sty.freeBoxprospect__h5H9Aqm5J]: hasVariant(
              $state,
              "prospect",
              "prospect"
            )
          })}
        >
          <div
            className={classNames(projectcss.all, sty.freeBox__xgnuD, {
              [sty.freeBoxprospect__xgnuDqm5J]: hasVariant(
                $state,
                "prospect",
                "prospect"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.freeBox___4G684)}>
              <h4
                data-plasmic-name={"h4"}
                data-plasmic-override={overrides.h4}
                className={classNames(
                  projectcss.all,
                  projectcss.h4,
                  projectcss.__wab_text,
                  sty.h4,
                  {
                    [sty.h4prospect]: hasVariant($state, "prospect", "prospect")
                  }
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return "Enquiry no: " + $props.enquiry.id;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "Loading...";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </h4>
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__nGK2)}
            >
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link___039Km
                )}
                href={(() => {
                  try {
                    return (
                      "https://wa.me/91" +
                      $props.enquiry.attributes.users_permissions_user.data
                        .attributes.Whatsapp
                    );
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
                platform={"react"}
                target={"_blank"}
              >
                <Button2
                  data-plasmic-name={"whatsappMessage"}
                  data-plasmic-override={overrides.whatsappMessage}
                  className={classNames("__wab_instance", sty.whatsappMessage)}
                  color={"clear"}
                >
                  <WhatsappColorSvgrepoComSvgIcon
                    className={classNames(projectcss.all, sty.svg__sHpuW)}
                    role={"img"}
                  />
                </Button2>
              </PlasmicLink__>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__dz0GE
                )}
                href={(() => {
                  try {
                    return (
                      "tel:" +
                      $props.enquiry.attributes.users_permissions_user.data
                        .attributes.Phone
                    );
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
                platform={"react"}
                target={"_blank"}
              >
                <Button2
                  data-plasmic-name={"phone"}
                  data-plasmic-override={overrides.phone}
                  className={classNames("__wab_instance", sty.phone)}
                  color={"clear"}
                >
                  <Icon11Icon
                    className={classNames(projectcss.all, sty.svg__bl2Ef)}
                    role={"img"}
                  />
                </Button2>
              </PlasmicLink__>
            </Stack__>
          </div>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__cKg1C)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__miyrv)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___07Ogu
                )}
              >
                {"Name"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__l7Fcy
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $props.enquiry.attributes.users_permissions_user
                        .data.attributes.username;
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
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__tOuS9)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mWqmB
                )}
              >
                {"Phone Number"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tjh1
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $props.enquiry.attributes.users_permissions_user
                        .data.attributes.Whatsapp;
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
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__tulqc)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jo0Cs
                )}
              >
                {"Email ID"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___7KmE
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $props.enquiry.attributes.users_permissions_user
                        .data.attributes.email;
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
            </div>
            <div className={classNames(projectcss.all, sty.freeBox___9HkR)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___2Yjnx
                )}
              >
                {"City"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vh3KX
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $props.enquiry.attributes.location.Location;
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
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__ausvx)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qs4Wa
                )}
              >
                {"Date of Wedding"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zc77C
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $props.enquiry.attributes.Date;
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
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__bkw7X)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mRViM
                )}
              >
                {"Services"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__megUc,
                  {
                    [sty.textprospect__megUcQm5J]: hasVariant(
                      $state,
                      "prospect",
                      "prospect"
                    )
                  }
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $props.enquiry.attributes.service.data.attributes
                        .Title;
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
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__cBs9R)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xnme5
                )}
              >
                {"Budget"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__j4Zv8
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $props.enquiry.attributes.Budget;
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
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__tPiB6)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___6FpE0
                )}
              >
                {"Comments"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__frPn
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $props.enquiry.attributes.Message;
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
            </div>
            {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
              (() => {
                try {
                  return $props.enquiry.attributes.answers.questions;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return [];
                  }
                  throw e;
                }
              })()
            ).map((__plasmic_item_0, __plasmic_idx_0) => {
              const currentItem = __plasmic_item_0;
              const currentIndex = __plasmic_idx_0;
              return (
                <div
                  className={classNames(projectcss.all, sty.freeBox__bik1G)}
                  key={currentIndex}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__kOth7
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return currentItem.Question;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "Comments";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__pjtT0
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return (
                            (currentItem.Answer ? currentItem.Answer : "") +
                            (currentItem.Date
                              ? `(${currentItem.Date.split("T")[0]})`
                              : "")
                          );
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
                </div>
              );
            })}
          </Stack__>
        </div>
      ) : null}
      <Fetcher
        data-plasmic-name={"dataFetcher"}
        data-plasmic-override={overrides.dataFetcher}
        dataOp={{
          sourceId: "bvg9JqrXbdUtvMXZbC26cd",
          opId: "7302e4e1-56d7-4b1c-a921-15310ca140a3",
          userArgs: {
            variables: [$props.storeId]
          },
          cacheKey: `plasmic.$.Df3uvwiGJI6_.$.7302e4e1-56d7-4b1c-a921-15310ca140a3.$.`,
          invalidatedKeys: null,
          roleId: null
        }}
        name={"formsInfo"}
        queries={{}}
      >
        {$queries => (
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__iBgyA, {
              [sty.freeBoxprospect__iBgyAqm5J]: hasVariant(
                $state,
                "prospect",
                "prospect"
              )
            })}
          >
            <AntdSelect
              data-plasmic-name={"formSelect"}
              data-plasmic-override={overrides.formSelect}
              bordered={false}
              className={classNames("__wab_instance", sty.formSelect, {
                [sty.formSelectprospect]: hasVariant(
                  $state,
                  "prospect",
                  "prospect"
                )
              })}
              defaultStylesClassName={classNames(
                projectcss.root_reset,
                projectcss.plasmic_default_styles,
                projectcss.plasmic_mixins,
                projectcss.plasmic_tokens,
                plasmic_antd_5_hostless_css.plasmic_tokens,
                plasmic_plasmic_rich_components_css.plasmic_tokens
              )}
              onChange={async (...eventArgs) => {
                generateStateOnChangeProp($state, [
                  "formSelect",
                  "value"
                ]).apply(null, eventArgs);
              }}
              options={(() => {
                try {
                  return $queries.formsInfo.data.response.data.forms.data.map(
                    form => {
                      return {
                        label: form.attributes.Title,
                        value: form.id
                      };
                    }
                  );
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return [
                      { value: "option1", label: "Option 1", type: "option" },
                      { value: "option2", label: "Option 2", type: "option" }
                    ];
                  }
                  throw e;
                }
              })()}
              placeholder={"Select..."}
              popupScopeClassName={sty["formSelect__popup"]}
              value={generateStateValueProp($state, ["formSelect", "value"])}
            />

            <ButtonContainer
              data-plasmic-name={"buttonContainer"}
              data-plasmic-override={overrides.buttonContainer}
              className={classNames("__wab_instance", sty.buttonContainer)}
            >
              <AntdButton
                data-plasmic-name={"sendMail"}
                data-plasmic-override={overrides.sendMail}
                className={classNames("__wab_instance", sty.sendMail, {
                  [sty.sendMailprospect]: hasVariant(
                    $state,
                    "prospect",
                    "prospect"
                  )
                })}
                disabled={(() => {
                  try {
                    return !$state.formSelect.value;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
                onClick={async () => {
                  const $steps = {};
                  $steps["graphqlQuery"] = true
                    ? (() => {
                        const actionArgs = {
                          dataOp: {
                            sourceId: "9Ec94AiZppYUapp3zS4mTp",
                            opId: "1d861cb7-a040-45db-b7e7-bbb41b8b3e42",
                            userArgs: {
                              path: [$props.enquiry.id],
                              body: [
                                {
                                  forms: {
                                    connect: [$state.formSelect.value]
                                  },
                                  Status: "FollowUp"
                                }
                              ]
                            },
                            cacheKey: null,
                            invalidatedKeys: null,
                            roleId: null
                          },
                          continueOnError: true
                        };
                        return (async ({ dataOp, continueOnError }) => {
                          try {
                            const response = await executePlasmicDataOp(
                              dataOp,
                              {
                                userAuthToken: dataSourcesCtx?.userAuthToken,
                                user: dataSourcesCtx?.user
                              }
                            );
                            await plasmicInvalidate(dataOp.invalidatedKeys);
                            return response;
                          } catch (e) {
                            if (!continueOnError) {
                              throw e;
                            }
                            return e;
                          }
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["graphqlQuery"] != null &&
                    typeof $steps["graphqlQuery"] === "object" &&
                    typeof $steps["graphqlQuery"].then === "function"
                  ) {
                    $steps["graphqlQuery"] = await $steps["graphqlQuery"];
                  }
                  $steps["runCode"] = true
                    ? (() => {
                        const actionArgs = {
                          customFunction: async () => {
                            return (() => {
                              const base =
                                "https://weddingvows.plasmic.run/form/";
                              return navigator.clipboard.writeText(
                                base +
                                  `${$state.formSelect.value}?enquiry=${$props.enquiry.id}`
                              );
                            })();
                          }
                        };
                        return (({ customFunction }) => {
                          return customFunction();
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["runCode"] != null &&
                    typeof $steps["runCode"] === "object" &&
                    typeof $steps["runCode"].then === "function"
                  ) {
                    $steps["runCode"] = await $steps["runCode"];
                  }
                  $steps["invokeGlobalAction"] = !$steps.graphqlQuery.data
                    .response.errors
                    ? (() => {
                        const actionArgs = {
                          args: [
                            "success",
                            "Enquiry form sent and copied to clipboard!"
                          ]
                        };
                        return $globalActions[
                          "plasmic-antd5-config-provider.showNotification"
                        ]?.apply(null, [...actionArgs.args]);
                      })()
                    : undefined;
                  if (
                    $steps["invokeGlobalAction"] != null &&
                    typeof $steps["invokeGlobalAction"] === "object" &&
                    typeof $steps["invokeGlobalAction"].then === "function"
                  ) {
                    $steps["invokeGlobalAction"] = await $steps[
                      "invokeGlobalAction"
                    ];
                  }
                  $steps["invokeGlobalAction2"] = $steps.graphqlQuery.data
                    .response.errors
                    ? (() => {
                        const actionArgs = {
                          args: ["error", "Failed! Try again"]
                        };
                        return $globalActions[
                          "plasmic-antd5-config-provider.showNotification"
                        ]?.apply(null, [...actionArgs.args]);
                      })()
                    : undefined;
                  if (
                    $steps["invokeGlobalAction2"] != null &&
                    typeof $steps["invokeGlobalAction2"] === "object" &&
                    typeof $steps["invokeGlobalAction2"].then === "function"
                  ) {
                    $steps["invokeGlobalAction2"] = await $steps[
                      "invokeGlobalAction2"
                    ];
                  }
                }}
                type={"ghost"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bIqod
                  )}
                >
                  {"Send Via Mail"}
                </div>
              </AntdButton>
            </ButtonContainer>
          </Stack__>
        )}
      </Fetcher>
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "spinner",
    "h4",
    "whatsappMessage",
    "phone",
    "dataFetcher",
    "formSelect",
    "buttonContainer",
    "sendMail"
  ],

  spinner: ["spinner"],
  h4: ["h4"],
  whatsappMessage: ["whatsappMessage"],
  phone: ["phone"],
  dataFetcher: ["dataFetcher", "formSelect", "buttonContainer", "sendMail"],
  formSelect: ["formSelect"],
  buttonContainer: ["buttonContainer", "sendMail"],
  sendMail: ["sendMail"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicEnquiryForm__ArgProps,
          internalVariantPropNames: PlasmicEnquiryForm__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicEnquiryForm__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEnquiryForm";
  } else {
    func.displayName = `PlasmicEnquiryForm.${nodeName}`;
  }
  return func;
}

export const PlasmicEnquiryForm = Object.assign(
  // Top-level PlasmicEnquiryForm renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    spinner: makeNodeComponent("spinner"),
    h4: makeNodeComponent("h4"),
    whatsappMessage: makeNodeComponent("whatsappMessage"),
    phone: makeNodeComponent("phone"),
    dataFetcher: makeNodeComponent("dataFetcher"),
    formSelect: makeNodeComponent("formSelect"),
    buttonContainer: makeNodeComponent("buttonContainer"),
    sendMail: makeNodeComponent("sendMail"),
    // Metadata about props expected for PlasmicEnquiryForm
    internalVariantProps: PlasmicEnquiryForm__VariantProps,
    internalArgProps: PlasmicEnquiryForm__ArgProps
  }
);

export default PlasmicEnquiryForm;
/* prettier-ignore-end */
