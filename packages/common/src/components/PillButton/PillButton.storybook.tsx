import React from "react";
import { AlertCircle } from "react-feather";

import PillButton from "./PillButton";
import { Card } from "../Card";
import { Icon } from "../Icon";
import { Typography, TypographyVariant_ENUM } from "../Typography";
export default {
  title: "PillButton Story",
  component: PillButton,
};

const onClick = () => {
  alert("Clicked");
};

export const PillButtonStory = () => {
  return (
    <Card style={{ padding: 20 }}>
      <Typography variant={TypographyVariant_ENUM.h5}>
        Binance Chain Wallet
      </Typography>

      <PillButton onClick={onClick}>
        <Icon
          src={"crypto-logos/bsc.svg"}
          height={22}
          width={22}
          alt={"BSC logo"}
          style={{ marginRight: 10 }}
        />
        BSC Mainnet
      </PillButton>
      <br />
      <Typography variant={TypographyVariant_ENUM.h5}>
        Metamask Wallet
      </Typography>

      <PillButton onClick={onClick}>
        <Icon
          src={"crypto-logos/metamask.png"}
          height={22}
          width={22}
          alt={"BSC logo"}
          style={{ marginRight: 10 }}
        />
        BSC Mainnet
      </PillButton>

      <br />
      <Typography variant={TypographyVariant_ENUM.h5}>
        No Wallet Connected
      </Typography>

      <PillButton onClick={onClick}>
        <AlertCircle height={22} width={22} style={{ marginRight: 10 }} />
        Not Connected
      </PillButton>
    </Card>
  );
};
