import React from "react";
import renderer from "react-test-renderer";
import { AutocompleteStory } from "./Autocomplete.storybook";
describe("AutocompleteStory Test", () => {
  it("Should render AutocompleteStory component", () => {
    const root = renderer.create(<AutocompleteStory />);
    let tree = root.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
