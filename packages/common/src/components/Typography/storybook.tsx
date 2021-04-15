import React from "react";
import { Typography, TypographyVariant_ENUM } from "../Typography";
// This default export determines where you story goes in the story list
export default {
  title: "Typography",
  component: Typography,
};

const TypographyStory = () => (
  <>
    <Typography variant={TypographyVariant_ENUM.h1}>Header H1</Typography>
    <br />
    <Typography variant={TypographyVariant_ENUM.h2}>Header H2</Typography>
    <br />
    <Typography variant={TypographyVariant_ENUM.h3}>Header H#</Typography>
    <br />
    <Typography variant={TypographyVariant_ENUM.h4}>Header H4</Typography>
    <br />
    <Typography variant={TypographyVariant_ENUM.h5}>Header H5</Typography>
    <br />
    <Typography variant={TypographyVariant_ENUM.h6}>Header H6</Typography>
    <br />
    <Typography variant={TypographyVariant_ENUM.p}>Text p</Typography>
    <br />
    <Typography variant={TypographyVariant_ENUM.link}>Link</Typography>
    <br />
  </>
);

export const TypographyVariants = TypographyStory.bind({});
