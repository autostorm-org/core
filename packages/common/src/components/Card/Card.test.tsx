import React from "react";
import renderer from "react-test-renderer";
import { MobileCardStory, DesktopCardStory } from "./Card.storybook";
describe("MobileCardStory Test", () => {
  it("Should render MobileCardStory component", () => {
    const root = renderer.create(<MobileCardStory />);
    let tree = root.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("DesktopCardStory Test", () => {
  it("Should render DesktopCardStory component", () => {
    const root = renderer.create(<DesktopCardStory />);
    let tree = root.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
