import React from "react";
import { Theme } from "../../types";

const defaultTheme: Theme = {
  name: "empty",
  values: {},
};

const theme: { theme: Theme; setTheme: (_theme: Theme) => void } = {
  theme: defaultTheme,
  setTheme: (_theme: Theme) => {},
};
const ThemeContext = React.createContext(theme);

const themeingClass = "__AUTOFICA_THEME";

const themeToStyles = (theme: Theme): string => {
  const styles = Object.entries(theme.values).reduce(
    (acc: string, next: [string, string]) => {
      return `${acc}\n ${next[0]}: ${next[1]}`;
    },
    ""
  );
  return `
    .${themeingClass}{
        /** Theme: ${theme.name} **/
      ${styles}
    }
  `.trim();
};

const ThemeProvider = (props: React.PropsWithChildren<{}>) => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);
  const node = React.useRef<HTMLStyleElement>(null);

  /* Initializes themeing */
  React.useEffect(() => {
    const stylesNodeTemp = document.createElement("style");
    document.head.appendChild(stylesNodeTemp);
    document.body.classList.add(themeingClass);
    node.current = stylesNodeTemp;
    return () => {
      document.head.removeChild(stylesNodeTemp);
      document.body.classList.remove(themeingClass);
    };
  }, []);
  /* Initializes changes theme values */
  React.useEffect(() => {
    console.log(theme);
    node.current.innerHTML = themeToStyles(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: defaultTheme, setTheme: setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const theme = React.useContext(ThemeContext);
  return theme;
};

export { ThemeProvider, useTheme, ThemeContext };
