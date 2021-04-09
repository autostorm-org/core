import React from "react";
import Button from "./Button";
import { withKnobs, boolean } from "@storybook/addon-knobs";

// import { ThemeContext, nightTheme, defaultTheme } from "../../theme";

import { useTheme } from "../Themeing";

// This default export determines where you story goes in the story list
export default {
  title: "Button",
  component: Button,
  decorators: [withKnobs],
};

const ResponsiveStory = () => {
  const btn = React.useMemo(() => <Button>Hello</Button>, []);

  const isDayMode = boolean("DAY MODE", true);
  const themeing = useTheme();

  React.useEffect(() => {
    if (isDayMode) {
      themeing.setTheme({
        name: "night",
        values: { "--button-background-color": "red" },
      });
    } else {
      themeing.setTheme({
        name: "none",
        values: {},
      });
    }
  }, [isDayMode]);

  return <>{btn}</>;
};

export const FirstStory = React.memo(ResponsiveStory).bind({});
