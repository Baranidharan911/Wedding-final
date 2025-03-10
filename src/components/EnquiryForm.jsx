// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PlasmicEnquiryForm } from "./plasmic/website_starter/PlasmicEnquiryForm";

function EnquiryForm_(props, ref) {
  // Use PlasmicEnquiryForm to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicEnquiryForm are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all EnquiryFormProps here, but feel free
  // to do whatever works for you.
  return <PlasmicEnquiryForm root={{ ref }} {...props} />;
}

const EnquiryForm = React.forwardRef(EnquiryForm_);

export default EnquiryForm;
