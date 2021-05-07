import React from "react";
import renderer from "react-test-renderer";
import { FirstStory } from "./HeaderBanner.storybook";
describe("HeaderBanner Test", () => {
  it("Should render HeaderBanner component", () => {
    const root = renderer.create(<FirstStory />);
    let tree = root.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
