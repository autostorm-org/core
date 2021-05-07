// React
import React from "react";
// type imports
import type { IOverridable, IStylable } from "../../types";
import styles from "./BoundedRow.module.scss";

interface BoundedRowProps extends IOverridable, IStylable {
  fullWidth?: boolean;
}

function BoundedRow(props: React.PropsWithChildren<BoundedRowProps>) {
  return (
    <div
      className={`${styles.root} ${props.override || ""} ${
        props.fullWidth ? styles.fullWidthRoot : ""
      }`}
      style={props.style}
    >
      {props.children}
    </div>
  );
}
export default BoundedRow;
export type { BoundedRowProps };
