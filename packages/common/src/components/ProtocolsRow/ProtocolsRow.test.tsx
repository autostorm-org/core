import React from "react";
import renderer from "react-test-renderer";
import ProtocolsRow from "./ProtocolsRow";
describe("Protocols Row Test", () => {
  it("Should render Protocol Row component", () => {
    const root = renderer.create(
      <ProtocolsRow
        rowLogos={[]}
        rowDescription={
          "Compare available loans from multiple lending protocols on binance smart chain. Chose the best APY for your situation."
        }
        rowTitle={"Find loans from BSC money market protocols"}
      />
    );
    let tree = root.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
