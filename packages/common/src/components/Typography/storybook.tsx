import React from "react";
import Typography, { EnumTypographyVariant } from "./Typography";
// This default export determines where you story goes in the story list
export default {
  title: "Typography",
  component: Typography,
};

const TypographyStory = () => (
  <>
    <Typography variant={EnumTypographyVariant.h1}>Header H1</Typography>
    <br />
    <Typography variant={EnumTypographyVariant.h2}>Header H2</Typography>
    <br />
    <Typography variant={EnumTypographyVariant.h3}>Header H#</Typography>
    <br />
    <Typography variant={EnumTypographyVariant.h4}>Header H4</Typography>
    <br />
    <Typography variant={EnumTypographyVariant.h5}>Header H5</Typography>
    <br />
    <Typography variant={EnumTypographyVariant.h6}>Header H6</Typography>
    <br />
    <Typography variant={EnumTypographyVariant.p}>Text p</Typography>
    <br />
    <Typography variant={EnumTypographyVariant.link}>Link</Typography>
    <br />
  </>
);

export const TypographyVariants = TypographyStory.bind({});
