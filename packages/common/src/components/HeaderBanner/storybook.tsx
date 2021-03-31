import React from "react";
import HeaderBannerText from "./HeaderBannerText";
// This default export determines where you story goes in the story list
export default {
  title: "HeaderBannerText",
  component: HeaderBannerText,
};

const Template = (args) => <HeaderBannerText>Hello</HeaderBannerText>;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};
