import React from "react";
import ManagerRow from "./ManagerRow";
export default {
  title: "Home Page Manager Row",
  component: ManagerRow,
};

export const ManagerRowStory = () => {
  return (
    <ManagerRow
      rowTitle={"Manage your loans."}
      rowDescription={
        "Using the loan manager feature you can repay your loans, compute the remaining outstanding balance or withdraw your collateral once the loan is paid."
      }
      rowButtons={[{ content: "Open loan dashboard" }]}
    />
  );
};
