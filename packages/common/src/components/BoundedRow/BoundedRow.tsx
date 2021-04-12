// React
import React from "react";
// type imports
import type { WithClassOverride } from "../../types";
import styles from "./BoundedRow.module.scss";

type BoundedRowProps = WithClassOverride<
  React.PropsWithChildren<{
    fullWidth?: boolean;
  }>
>;

function BoundedRow(props: BoundedRowProps) {
  return (
    <div
      className={`${styles.root} ${props.override || ""} ${
        props.fullWidth ? styles.fullWidthRoot : ""
      }`}
    >
      {props.children}
    </div>
  );
}
export default BoundedRow;
export { BoundedRow };
export type { BoundedRowProps };
