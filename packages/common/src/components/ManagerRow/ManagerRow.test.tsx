import React from "react";
import renderer from "react-test-renderer";
import ManagerRow from "./ManagerRow";
describe("Manager Row Test", () => {
  it("Should render Manager Row component", () => {
    const root = renderer.create(
      <ManagerRow
        rowTitle={"Manage your loans."}
        rowDescription={
          "Using the loan manager feature you can repay your loans, compute the remaining outstanding balance or withdraw your collateral once the loan is paid."
        }
        rowButtons={[{ content: "Open loan dashboard" }]}
      />
    );
    let tree = root.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
