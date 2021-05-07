import React from "react";
import renderer from "react-test-renderer";
import { ButtonStory } from "./Button.storybook";
describe("ButtonStory Test", () => {
  it("Should render ButtonStory component", () => {
    const root = renderer.create(<ButtonStory />);
    let tree = root.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
