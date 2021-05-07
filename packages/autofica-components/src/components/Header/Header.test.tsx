import React from "react";
import renderer from "react-test-renderer";
import { HeaderFull } from "./Header.storybook";
describe("Header Test", () => {
  it("Should render Header component", () => {
    const root = renderer.create(<HeaderFull />);
    let tree = root.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
