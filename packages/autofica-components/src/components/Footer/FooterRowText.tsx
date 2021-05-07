import React from "react";
import type { WithClassOverride } from "../../types";
import styles from "./FooterRowText.module.scss";

type FooterRowTextProps = WithClassOverride<React.PropsWithChildren<{}>>;

function FooterRowText(props: FooterRowTextProps) {
  const overrideClass = props.override || "";
  return (
    <span className={`${styles.root} ${overrideClass}`}>{props.children}</span>
  );
}
export default FooterRowText;
