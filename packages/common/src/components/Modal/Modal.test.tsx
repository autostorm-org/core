import React, { useState } from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { ModalStory } from "./Modal.storybook";
import { modalElementId } from "./Modal.constants";

let container;

beforeEach(() => {
  container = document.createElement("aside");
  container.id = modalElementId;
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});
describe("Modal Test", () => {
  it("Should render Modal component", () => {
    act(() => {
      ReactDOM.render(<ModalStory />, container);
    });

    expect(container).toMatchSnapshot();
  });
});
