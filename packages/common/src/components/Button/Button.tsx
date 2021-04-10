import React from "react";
import styles from "./Button.module.css";
type ButtonProps = {
  onClick?: () => void;
  onHover?: () => void;
  overrides?: { [key: string]: any };
  disabled?: boolean;
};

const Button = (props: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={styles.root}
      onClick={props.onClick}
      style={props.overrides}
      disabled={Boolean(props.disabled)}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
export { Button };

export type { ButtonProps };
