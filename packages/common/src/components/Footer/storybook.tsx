import React from "react";
import Footer from "./Footer";
import FooterResponsive from "./FooterResponsive";
export default {
  title: "Footer",
  component: Footer,
};

const ReponsiveFooter = () => {
  return <FooterResponsive />;
};

export const FooterStory = ReponsiveFooter.bind({});
