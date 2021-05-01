import React from "react";
import type { IClickable, IAriaLabel, IOverridable } from "../../types";
import styles from "./PillButton.module.scss";

interface PillButtonProps
  extends IClickable<HTMLButtonElement>,
    IAriaLabel,
    IOverridable {}

const PillButton = (props: React.PropsWithChildren<PillButtonProps>) => {
  const overrideClass = props.override ?? "";
  return (
    <button
      className={`${styles.root} ${overrideClass}`}
      onClick={props.onClick}
      aria-label={props["aria-label"]}
    >
      {props.children}
    </button>
  );
};
export default PillButton;
export type { PillButtonProps };
