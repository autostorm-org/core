import React from "react";
import renderer from "react-test-renderer";
import PillButton from "./PillButton";
import Icon from "../Icon";
describe("PillButton Test", () => {
  it("Should render PillButton component", () => {
    const root = renderer.create(
      <PillButton onClick={() => {}}>
        <Icon
          src={"crypto-logos/bsc.svg"}
          height={22}
          width={22}
          alt={"BSC logo"}
          style={{ marginRight: 10 }}
        />
        BSC Mainnet
      </PillButton>
    );
    let tree = root.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
