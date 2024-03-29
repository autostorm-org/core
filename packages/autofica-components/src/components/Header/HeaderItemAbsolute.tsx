// React
import React from "react";
// imports
import { HeaderLocations } from "./constants";
// styles
import styles from "./HeaderItemAbsolute.module.scss";

import type { WithClassOverride } from "../../types";

type HeaderItemAbsoluteProps = WithClassOverride<
  React.PropsWithChildren<{
    itemLocation: HeaderLocations;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    "aria-expanded"?: boolean;
    "aria-label"?: string;
    id?: string;
  }>
>;

const HeaderItemAbsolute = (props: HeaderItemAbsoluteProps) => {
  const overrideClass = props.override || "";
  return (
    <li
      className={`${styles.root} ${
        props.itemLocation == HeaderLocations.left
          ? styles.leftPositionedItem
          : props.itemLocation == HeaderLocations.right
          ? styles.rightPositionedItem
          : ""
      } ${overrideClass}`}
      aria-label={props["aria-label"]}
      id={props.id}
    >
      <a
        href="#"
        aria-expanded={props["aria-expanded"]}
        onClick={function (e) {
          e.preventDefault();
          if (props.onClick != null) {
            props.onClick(e);
          }
        }}
      >
        {props.children}
      </a>
    </li>
  );
};

export default HeaderItemAbsolute;
export type { HeaderItemAbsoluteProps };
