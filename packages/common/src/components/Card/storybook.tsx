import React from "react";
import Card from "./Card";
import { TypographyVariant_ENUM, Typography } from "../Typography";
import Button from "../Button";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { ThemeContext, nightTheme, defaultTheme } from "../../theme";
import ResponsiveTemplate from "../ResponsiveTemplate";
// This default export determines where you story goes in the story list
export default {
  title: "Card",
  component: Card,
  decorators: [withKnobs],
};

const MobileCard = () => {
  return (
    <div style={{ height: 184, width: 350 }}>
      <Card>
        <Typography variant={TypographyVariant_ENUM.h3}>Card title</Typography>
        <br />
        <Typography variant={TypographyVariant_ENUM.p}>
          Card body contents. Card body contents. Card body contents. Card body
          contents.
        </Typography>
        <br />
        <Button onClick={() => {}} style={{ marginTop: 9 }}>
          Call to action
        </Button>
      </Card>
    </div>
  );
};

const DesktopCard = () => {
  return (
    <div style={{ height: 240, width: 560 }}>
      <Card style={{ padding: "30px" }}>
        <Typography variant={TypographyVariant_ENUM.h1}>
          Crypto car loan finder
        </Typography>
        <br />
        <Typography variant={TypographyVariant_ENUM.p}>
          Get a collateralized loan for your next car purchase. Chose your
          backing assets. Powered by Multiplier.{" "}
        </Typography>
        <br />
        <Button onClick={() => {}} style={{ marginTop: 10 }}>
          Call to action
        </Button>
      </Card>
    </div>
  );
};

const ResponsiveStory = () => {
  const isDayMode = boolean("DAY MODE", true);
  return (
    <ThemeContext.Provider value={isDayMode ? defaultTheme : nightTheme}>
      <ResponsiveTemplate
        mobile={MobileCard}
        desktop={DesktopCard}
        tablet={DesktopCard}
      />
    </ThemeContext.Provider>
  );
};

export const FirstStory = ResponsiveStory.bind({});
