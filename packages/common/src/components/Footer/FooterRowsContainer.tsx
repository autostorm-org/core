import React from "react";
import { WithClassOverride } from "../../types";
import styles from "./FooterRowsContainer.module.scss";

type FooterRowsContainerProps = WithClassOverride<React.PropsWithChildren<{}>>;

/**
 * FooterRowsContainer
 * @param props Props for the Footer Row container
 * @returns The Footer Row Container JSX Element
 */
const FooterRowsContainer = (props: FooterRowsContainerProps) => {
  return <div className={styles.root}>{props.children}</div>;
};
export default FooterRowsContainer;
export type { FooterRowsContainerProps };
