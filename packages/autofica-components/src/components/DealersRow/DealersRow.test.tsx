import React from "react";
import renderer from "react-test-renderer";
import { DealersRowStory } from "./DealersRow.storybook";
describe("DealersRowStory Test", () => {
  it("Should render DealersRowStory component", () => {
    const root = renderer.create(<DealersRowStory />);
    let tree = root.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
