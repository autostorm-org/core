import React from "react";
import Card from "./Card";
import { TypographyVariant_ENUM, Typography } from "../Typography";
import { Button } from "../Button";
import { withKnobs } from "@storybook/addon-knobs";
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

export const MobileCardStory = MobileCard.bind({});
export const DesktopCardStory = DesktopCard.bind({});
