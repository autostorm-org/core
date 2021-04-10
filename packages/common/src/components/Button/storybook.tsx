import React from "react";
import Button from "./Button";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { useStaticThemeContext } from "../Themeing";

// This default export determines where you story goes in the story list
export default {
  title: "Button",
  component: Button,
};

export const ButtonStory = () => {
  return <Button>Hello</Button>;
};
