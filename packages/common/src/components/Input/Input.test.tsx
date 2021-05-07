import React from "react";
import renderer from "react-test-renderer";
import { FirstStory } from "./Input.storybook";
describe("Input Test", () => {
  it("Should render Input component", () => {
    const root = renderer.create(<FirstStory />);
    let tree = root.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
