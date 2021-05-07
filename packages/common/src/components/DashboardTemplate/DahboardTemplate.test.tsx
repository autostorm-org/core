import React, { useState } from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { DashboardTemplateStory } from "./DashboardTemplate.storybook";
import { modalElementId } from "../Modal/Modal.constants";

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
describe("DashboardTemplateStory Test", () => {
  it("Should render Modal component", () => {
    act(() => {
      ReactDOM.render(<DashboardTemplateStory />, container);
    });

    expect(container).toMatchSnapshot();
  });
});
