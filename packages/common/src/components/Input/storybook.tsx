import React from "react";
import Input from "./Input";
import { Typography, TypographyVariant_ENUM } from "../Typography";
// This default export determines where you story goes in the story list
export default {
  title: "Input",
  component: Input,
};

const Template = () => {
  return (
    <>
      <Typography variant={TypographyVariant_ENUM.h3}>Input</Typography>
      <Input />
    </>
  );
};

export const FirstStory = Template.bind({});
