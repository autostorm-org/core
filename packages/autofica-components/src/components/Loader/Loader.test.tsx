import React from "react";
import renderer from "react-test-renderer";
import { LoaderStory } from "./Loader.storybook";
describe("Loader Test", () => {
  it("Should render Loader component", () => {
    const root = renderer.create(<LoaderStory />);
    let tree = root.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
