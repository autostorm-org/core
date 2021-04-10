import React from "react";
import "@autofica/common/lib/index.css";
import { Button } from "@autofica/common/lib/components/Button";
import {
  StaticThemeProvider,
  useStaticThemeContext,
} from "@autofica/common/lib/components/Themeing";

const ThemeChanger = () => {
  const themer = useStaticThemeContext();

  const toggle = () => {
    if (themer.theme == null) {
      themer.setTheme({
        name: "theme1",
      });
      return;
    }

    if (themer.theme.name == "empty") {
      themer.setTheme({
        name: "theme1",
      });
    } else {
      themer.setTheme({
        name: "theme2",
      });
    }
  };
  return <Button onClick={toggle}>Toggle</Button>;
};

function App() {
  return (
    <StaticThemeProvider>
      <div>
        <ThemeChanger />
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </div>
    </StaticThemeProvider>
  );
}

export default App;
