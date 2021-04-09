import React from "react";
import { WithChildren } from "../types";

const theme = { themeName: "light", setThemeName: (_name: string) => {} };
const ThemeContext = React.createContext(theme);

const ThemeProvider = (props: WithChildren<{}>) => {
  const [themeName, setThemeName] = React.useState("");

  React.useEffect(() => {}, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const theme = React.useContext(ThemeContext);
  return theme;
};

export { ThemeProvider, useTheme, ThemeContext };
