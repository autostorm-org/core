import React from "react";
import { ThemeProvider } from "../src/components/Themeing";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
