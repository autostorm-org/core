import React from "react";
import InstructionsRow from "./InstructionsRow";
export default {
  title: "Home Page Instructions Row",
  component: InstructionsRow,
};

export const InstructionsRowStory = () => {
  return (
    <InstructionsRow
      steps={[
        {
          visualOrder: "1",
          content:
            "Open the DAPP and connect a BSC wallet. and authorize the DAPP",
        },
        {
          visualOrder: "2",
          content:
            "Find loans with varying APY and chose the best for your situation.",
        },
        {
          visualOrder: "3",
          content: "Manage your loans and withdraw your collateral once paid",
        },
      ]}
    />
  );
};
