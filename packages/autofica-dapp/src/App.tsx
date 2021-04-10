import React from "react";
import "@autofica/common/lib/index.css";
import { Button } from "@autofica/common/lib/components/Button";
import {
  ThemeProvider,
  useTheme,
} from "@autofica/common/lib/components/Themeing";

const ThemeChanger = () => {
  const themer = useTheme();

  console.log(themer.theme.name);
  const toggle = () => {
    if (themer.theme.name == "empty") {
      themer.setTheme({
        name: "non",
        values: { "--button-background-color": "red" },
      });
    } else {
      themer.setTheme({
        name: "empty",
        values: { "--button-background-color": "green" },
      });
    }
  };
  return <Button onClick={toggle}>Toggle</Button>;
};

function App() {
  console.log(React);
  console.log("s");

  return (
    <ThemeProvider>
      <div>
        <ThemeChanger />
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
