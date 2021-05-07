import React from "react";
import renderer from "react-test-renderer";
import { IconButtonStory } from "./IconButton.storybook";
describe("IconButtonStory Test", () => {
  it("Should render IconButtonStory component", () => {
    const root = renderer.create(<IconButtonStory />);
    let tree = root.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
