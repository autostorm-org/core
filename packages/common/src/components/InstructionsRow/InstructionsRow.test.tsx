import React from "react";
import renderer from "react-test-renderer";
import { InstructionsRowStory } from "./InstructionsRow.storybook";
describe("Instructions Row Test", () => {
  it("Should render Instructions Row component", () => {
    const root = renderer.create(<InstructionsRowStory />);
    let tree = root.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
