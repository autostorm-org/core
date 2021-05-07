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
    <div style={{ padding: 10 }}>
      <Typography variant={TypographyVariant_ENUM.h6}>Text input</Typography>
      <Input
        id={"text-input"}
        type={"text"}
        placeholder={"Text input"}
        autocomplete={"off"}
      />
      <Typography variant={TypographyVariant_ENUM.h6}>Number input</Typography>
      <Input id={"number-input"} type={"number"} placeholder={"Number input"} />
      <Typography variant={TypographyVariant_ENUM.h6}>File input</Typography>
      <Input id={"file-input"} type={"file"} placeholder={"File input"} />
      <Typography variant={TypographyVariant_ENUM.h6}>Email input</Typography>
      <Input id={"email-input"} type={"email"} placeholder={"Email input"} />
      <Typography variant={TypographyVariant_ENUM.h6}>Date input</Typography>
      <Input id={"date-input"} type={"date"} placeholder={"Date input"} />
      <Typography variant={TypographyVariant_ENUM.h6}>Tel input</Typography>
      <Input id={"tel-input"} type={"tel"} placeholder={"Tel input"} />
      <Typography variant={TypographyVariant_ENUM.h6}>
        Password input
      </Typography>
      <Input id={"password-input"} type={"password"} />
    </div>
  );
};

export const FirstStory = Template.bind({});
