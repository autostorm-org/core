import React from "react";
import RadioInput from "./RadioInput";
import RadioInputContextProvider from "./RadioInputContext";
import { Card } from "../Card";
import { Typography, TypographyVariant_ENUM } from "../Typography";
export default {
  title: "RadioInput Story",
  component: RadioInput,
};

export const RadioInputStory = () => {
  return (
    <Card>
      <div role="radiogroup" aria-labelledby="Greeting Title">
        <Typography variant={TypographyVariant_ENUM.h3} id="Greeting Title">
          Chose your greeting
        </Typography>

        <br></br>
        <RadioInputContextProvider name={"Greetings"} initialValue={"hello"}>
          <RadioInput
            name={"greeting"}
            value={"hello"}
            id={"Hello Option"}
            disabled={true}
            rightVisualLabel={
              <Typography variant={TypographyVariant_ENUM.p}>hello</Typography>
            }
          />
          <br></br>

          <RadioInput
            name={"greeting"}
            value={"world"}
            id={"world Option"}
            rightVisualLabel={
              <Typography variant={TypographyVariant_ENUM.p}>world</Typography>
            }
          />
          <br></br>
        </RadioInputContextProvider>
      </div>

      <div role="radiogroup" aria-label="Chose your pet">
        <Typography variant={TypographyVariant_ENUM.h3}>
          <label>Chose your Pet</label>
        </Typography>

        <br></br>
        <RadioInputContextProvider name={"Pet"} initialValue={""}>
          <RadioInput
            name={"Pet"}
            value={"Akita Inu"}
            id={"Akita Inu Option"}
            rightVisualLabel={
              <Typography variant={TypographyVariant_ENUM.p}>
                Akita Inu
              </Typography>
            }
          />
          <br></br>

          <RadioInput
            name={"Pet"}
            value={"Shiba Inu"}
            id={"Shiba Inu Option"}
            rightVisualLabel={
              <Typography variant={TypographyVariant_ENUM.p}>
                Shiba Inu
              </Typography>
            }
          />
          <br></br>
        </RadioInputContextProvider>
      </div>
    </Card>
  );
};
