import React from "react";
import renderer from "react-test-renderer";
import { FooterStory } from "./Footer.storybook";
describe("FooterStory Test", () => {
  it("Should render FooterStory component", () => {
    const root = renderer.create(<FooterStory />);
    let tree = root.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
