// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PlasmicStep2 } from "./plasmic/website_starter/PlasmicStep2";

function Step2_(props, ref) {
  // Use PlasmicStep2 to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicStep2 are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all Step2Props here, but feel free
  // to do whatever works for you.
  return <PlasmicStep2 root={{ ref }} {...props} />;
}

const Step2 = React.forwardRef(Step2_);

export default Step2;
