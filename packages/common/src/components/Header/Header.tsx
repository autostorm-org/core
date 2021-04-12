// React
import React from "react";
// imports
import { BoundedRow } from "../BoundedRow";
// styles
import styles from "./Header.module.scss";

type HeaderProps = { children: any; submenu?: any };

const ProductBarDesktop = (props: HeaderProps) => {
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
};

export default ProductBarDesktop;
