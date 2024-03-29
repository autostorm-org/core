import React from "react";
import styles from "./DashboardOptionsItem.module.scss";
import type { IClickable, IOverridable, IStylable } from "../../types";

interface DashboardOptionsItemProps
  extends IClickable<HTMLAnchorElement>,
    IStylable,
    IOverridable {
  href?: string;
  anchorOverride?: string;
  activeElement?: boolean;
}

const DashboardOptionsItem = (
  props: React.PropsWithChildren<DashboardOptionsItemProps>
) => {
  const overrideClass = props.override || "";
  const anchorClass = props.anchorOverride || "";
  const decorationClass = props.activeElement
    ? styles.activeElement
    : styles.nonActiveElement;
  return (
    <li className={`${styles.root} ${overrideClass}`} style={props.style}>
      <a
        className={`${styles.anchor} ${anchorClass} ${decorationClass}`}
        href={props.href}
      >
        {props.children}
      </a>
    </li>
  );
};
export default DashboardOptionsItem;
export type { DashboardOptionsItemProps };
