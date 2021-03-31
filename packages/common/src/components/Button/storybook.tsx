import React from "react";
import Button from "./Button";
// This default export determines where you story goes in the story list
export default {
  title: "Button",
  component: Button,
};

const ResponsiveStory = () => <Button>Hello</Button>;

export const FirstStory = ResponsiveStory.bind({});
