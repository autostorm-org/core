import React from "react";
import {
  StaticThemeProvider,
  useStaticThemeContext,
} from "../src/components/Themeing";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import "../src/theme/day-theme.scss";
import "../src/theme/night-theme.scss";
import "../src/theme/variables.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const useStorybookThemeToggle = () => {
  const themeing = useStaticThemeContext();
  const isDayMode = boolean("DAY MODE", true);

  React.useEffect(() => {
    document.body.style.backgroundColor = "var(--backdrop-background-color)";
  }, []);
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
