import React from "react";

import styles from "./ModalDivider.module.scss";

interface IModalHeaderProps {}

const ModalDivider = (props: React.PropsWithChildren<IModalHeaderProps>) => {
  return <div className={styles.root}>{props.children}</div>;
};
export default ModalDivider;
export type { IModalHeaderProps };
