import React from "react";
import Input from "./Input";
// This default export determines where you story goes in the story list
export default {
  title: "Input",
  component: Input,
};

const Template = (args) => <Input />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};
