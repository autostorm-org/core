import React from "react";

type Theme = { name: string; values: { [key: string]: string } };

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
  const styleNodeRef = React.useRef<HTMLStyleElement>(
    document.createElement("style")
  );

  /* Initializes themeing */
  React.useEffect(() => {
    document.head.appendChild(styleNodeRef.current);
    document.body.classList.add(themeingClass);
    return () => {
      document.head.removeChild(styleNodeRef.current);
      document.body.classList.remove(themeingClass);
    };
  }, []);

  /* Initializes changes theme values */
  React.useEffect(() => {
    styleNodeRef.current.innerHTML = themeToStyles(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const theme = React.useContext(ThemeContext);
  return theme;
};

export { ThemeProvider, useTheme, ThemeContext };
