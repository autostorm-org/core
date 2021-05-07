import React from "react";
import { WithClassOverride } from "../../types";
import styles from "./FooterRowHeader.module.scss";

type FooterRowHeaderProps = WithClassOverride<React.PropsWithChildren<{}>>;

const FooterRowHeader = (props: FooterRowHeaderProps) => {
  return <span className={styles.root}>{props.children}</span>;
};
export default FooterRowHeader;
export type { FooterRowHeaderProps };
