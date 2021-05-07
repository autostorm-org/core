import React from "react";
import renderer from "react-test-renderer";
import type { ReactTestRenderer } from "react-test-renderer";
import RadioInput from "./RadioInput";
import RadioInputContextProvider from "./RadioInputContext";

describe("Radio Button group Tests", () => {
  let root: ReactTestRenderer = null;
  afterEach(() => {
    if (root != null) {
      root.unmount();
    }
  });

  it("renders radio inputs", () => {
    root = renderer.create(<RadioInput name="group" value="test"></RadioInput>);
    expect(root.toJSON()).toMatchSnapshot();
  });

  it("renders renders a radio group", () => {
    root = renderer.create(
      <RadioInputContextProvider name="group" initialValue="">
        <RadioInput name="group" value="a"></RadioInput>
        <RadioInput name="group" value="b"></RadioInput>
      </RadioInputContextProvider>
    );
    expect(root.toJSON()).toMatchSnapshot();
  });
});
