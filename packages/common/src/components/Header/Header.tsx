import React from "react";
import { createUseStyles } from "../../theme";
import { BoundedRow } from "../BoundedRow";
import { theming } from "../../theme";

const useStyles = createUseStyles(function (theme) {
  return {
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.white.contrast,
      width: "100%",
      height: 66,
    },
    menu: {
      display: "flex",
      alignItems: "center",
      margin: 0,
      padding: 0,
    },
  };
});

type HeaderProps = { children: any; submenu?: any };

export default function ProductBarDesktop(props: HeaderProps) {
  const styles = useStyles();
  return (
    <nav className={styles.root} aria-label="Autofica">
      <BoundedRow>
        <ul className={styles.menu} role="menu">
          {props.children}
        </ul>
        {props.submenu}
      </BoundedRow>
    </nav>
  );
}
