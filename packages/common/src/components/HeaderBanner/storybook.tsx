import React from "react";
import HeaderBanner from "./HeaderBanner";
// This default export determines where you story goes in the story list
export default {
  title: "HeaderBanner",
  component: HeaderBanner,
};
const CARD_TITLE = "Crypto car loan finder";

const CARD_DESCRIPTION =
  "Get a collateralized loan for your next car purchase. Chose your backing assets. Powered by Multiplier.";

const CARD_CTADESCRIPTION = "Find your car loan";
const Template = (args) => (
  <HeaderBanner
    title={CARD_TITLE}
    description={CARD_DESCRIPTION}
    ctaDescription={CARD_CTADESCRIPTION}
  />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};
