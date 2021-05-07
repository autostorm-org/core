import React from "react";
import DealersRow from "./DealersRow";
export default {
  title: "Home Page Dealers Row",
  component: DealersRow,
};

export const DealersRowStory = () => {
  return (
    <DealersRow
      rowTitle={"Find dealers that take crypto as payment."}
      rowDescription={
        "Find a list of car dealerships that support payments in cryptocurrency. Arrange payment with these dealerships or ask your local dealers about crypto payments."
      }
      rowButtons={[{ content: "Find car dealers" }]}
    />
  );
};
