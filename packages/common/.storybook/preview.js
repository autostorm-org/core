import React from "react";
import {
  StaticThemeProvider,
  useStaticThemeContext,
} from "../src/components/Themeing";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const useStorybookThemeToggle = () => {
  const themeing = useStaticThemeContext();
  const isDayMode = boolean("DAY MODE", true);
  React.useEffect(() => {
    if (isDayMode) {
      themeing.setTheme({
        name: "day",
      });
    } else {
      themeing.setTheme({
        name: "night",
      });
    }
  }, [isDayMode]);
};

export const decorators = [
  (Story) => {
    const Temp = () => {
      useStorybookThemeToggle();
      return <Story />;
    };
    return (
      <StaticThemeProvider>
        <Temp />
      </StaticThemeProvider>
    );
  },
  withKnobs,
];
