import React from "react";
import { WithClassOverride } from "../../types";
import styles from "./FooterRow.module.scss";

type FooterRowProps = WithClassOverride<React.PropsWithChildren<{}>>;

const FooterRow = (props: FooterRowProps) => {
  const classOverride = props.override || "";
  return (
    <div className={`${styles.root} ${classOverride}`}>{props.children}</div>
  );
};

export default FooterRow;
export type { FooterRowProps };
