import React from "react";
import { StaticTheme } from "./types";

const initialContext: {
  theme?: StaticTheme;
  setTheme: (_theme: StaticTheme) => void;
} = {
  theme: null,
  setTheme: (_theme: StaticTheme) => {},
};

/**
 * The Context that provides the current static theme.
 */
const StaticThemeContext = React.createContext(initialContext);

type StaticThemeProviderProps = React.PropsWithChildren<{
  initialTheme?: StaticTheme;
}>;

/**
 * Static themeing Provider
 * @param props StaticThemeProviderProps
 * @returns The Static themeing Provider component
 */
const StaticThemeProvider = (props: StaticThemeProviderProps) => {
  const [theme, setTheme] = React.useState<StaticTheme>(
    props.initialTheme || initialContext.theme
  );
  const previousTheme = React.useRef<StaticTheme | null>(null);

  /* Initializes changes theme values */
  React.useEffect(() => {
    if (previousTheme.current != null) {
      document.body.classList.remove(previousTheme.current.name);
    }
    document.head.classList.add(theme.name);
    previousTheme.current = theme;
  }, [theme.name]);

  return (
    <StaticThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      {props.children}
    </StaticThemeContext.Provider>
  );
};

/**
 * React hook to use the current static theme value.
 * @returns The themeing context.
 */
const useStaticTheme = () => {
  const theme = React.useContext(StaticThemeContext);
  return theme;
};

export { StaticThemeProvider, useStaticTheme, StaticThemeContext };
