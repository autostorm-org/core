import React from "react";
import styles from "./Button.module.scss";
import { WithOverrides } from "../../types";
type ButtonProps = WithOverrides<
  React.PropsWithChildren<{
    onClick?: () => void;
    onHover?: () => void;
    disabled?: boolean;
  }>
>;

const Button = (props: ButtonProps) => {
  const override = props.override || "";
  return (
    <button
      className={`${styles.root} ${override}`}
      onClick={props.onClick}
      style={props.style}
      disabled={Boolean(props.disabled)}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
export { Button };

export type { ButtonProps };
