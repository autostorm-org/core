import React from "react";
import { createUseStyles as internalCUS, createTheming } from "react-jss";
import defaultTheme from "./defaultTheme";
const ThemeContext = React.createContext(defaultTheme);

// Creating a namespaced theming object.
const theming = createTheming<any>(ThemeContext);

function createUseStyles(styles) {
  // console.log(theming);

  return internalCUS(styles, { theming });
}

export { theming, createUseStyles, defaultTheme };
