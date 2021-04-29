import React from "react";
import type { IClickable, IAriaLabel } from "../../types";
import styles from "./PillButton.module.scss";

interface PillButtonProps extends IClickable<HTMLButtonElement>, IAriaLabel {}

const PillButton = (props: React.PropsWithChildren<PillButtonProps>) => {
  return (
    <button
      className={styles.root}
      onClick={props.onClick}
      aria-label={props["aria-label"]}
    >
      {props.children}
    </button>
  );
};
export default PillButton;
export type { PillButtonProps };
