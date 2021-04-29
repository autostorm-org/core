import React from "react";
import type { IOverridable, IStylable } from "../../types";
import styles from "./DashboardOptionsColumn.module.scss";

interface DashboardOptionsColumnProps extends IOverridable, IStylable {}

const DashboardOptionsColumn = (
  props: React.PropsWithChildren<DashboardOptionsColumnProps>
) => {
  const overrideClass = props.override || "";
  return (
    <ul className={`${styles.root} ${overrideClass}`} style={props.style}>
      {props.children}
    </ul>
  );
};
export default DashboardOptionsColumn;
export type { DashboardOptionsColumnProps };
