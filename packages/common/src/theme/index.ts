import React from "react";
import { createUseStyles as internalCUS, createTheming } from "react-jss";
import defaultTheme from "./defaultTheme";
import nightTheme from "./nightTheme";
const ThemeContext = React.createContext(defaultTheme);

// Creating a namespaced theming object.
const theming = createTheming<any>(ThemeContext);

function createUseStyles(styles: any) {
  // console.log(theming);

  return internalCUS(styles, { theming });
}

export { theming, createUseStyles, defaultTheme, nightTheme, ThemeContext };
