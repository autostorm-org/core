// React
import React from "react";
// imports
import { BoundedRow } from "../BoundedRow";
// type import
import type { WithClassOverride } from "../../types";
// styles
import styles from "./Header.module.scss";

type HeaderProps = WithClassOverride<
  React.PropsWithChildren<{
    submenu?: React.ReactNode;
    fullWidth?: boolean;
  }>
>;

const Header = (props: HeaderProps) => {
  const overrideClass = props.override || "";
  return (
    <nav className={`${styles.root} ${overrideClass}`} aria-label="Autofica">
      <BoundedRow fullWidth={Boolean(props.fullWidth)}>
        <ul className={styles.menu} role="menu">
          {props.children}
        </ul>
        {props.submenu}
      </BoundedRow>
    </nav>
  );
};

export default Header;
export type { HeaderProps };
