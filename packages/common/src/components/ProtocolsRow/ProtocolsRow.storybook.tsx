import React from "react";
import ProtocolsRow from "./ProtocolsRow";
export default {
  title: "Home Page Protocols Row",
  component: ProtocolsRow,
};

export const ProtocolsRowStory = () => {
  return (
    <ProtocolsRow
      rowLogos={
        [
          // {
          //   src: "./multiplier-logo.svg",
          //   alt: "Multipler.finance logo",
          //   loader: null,
          //   style: { backgroundColor: "var(--dark-dark)", width: 150 },
          // },
        ]
      }
      rowDescription={
        "Compare available loans from multiple lending protocols on binance smart chain. Chose the best APY for your situation."
      }
      rowTitle={"Find loans from BSC money market protocols"}
    />
  );
};
