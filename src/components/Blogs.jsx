// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PlasmicBlogs } from "./plasmic/website_starter/PlasmicBlogs";

function Blogs_(props, ref) {
  // Use PlasmicBlogs to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicBlogs are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all BlogsProps here, but feel free
  // to do whatever works for you.
  return <PlasmicBlogs root={{ ref }} {...props} />;
}

const Blogs = React.forwardRef(Blogs_);

export default Blogs;
