import React from "react";
import { Theme } from "../../types";

const defaultTheme: Theme = { name: "empty", values: {} };

const theme: { theme: Theme; setTheme: (_theme: Theme) => void } = {
  theme: defaultTheme,
  setTheme: (_theme: Theme) => {},
};
const ThemeContext = React.createContext(theme);

const themeToStyles = (theme: Theme): string => {
  const styles = Object.entries(theme.values).reduce(
    (acc: string, next: [string, string]) => {
      return `${acc}\n ${next[0]}: ${next[1]}`;
    },
    ""
  );
  return `
    .__AUTOFICA_THEME{
        /** Theme: ${theme.name} **/
      ${styles}
    }
  `.trim();
};

const ThemeProvider = (props: React.PropsWithChildren<{}>) => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme: defaultTheme, setTheme: () => {} }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const theme = React.useContext(ThemeContext);
  return theme;
};

export { ThemeProvider, useTheme, ThemeContext };
