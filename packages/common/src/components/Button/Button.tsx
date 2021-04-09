import React from "react";
// import useStyles from "./styles";
import styles from "./Button.module.css";
type ButtonProps = {
  onClick?: () => void;
  onHover?: () => void;
  overrides?: { [key: string]: any };
  disabled?: boolean;
};

const Button = React.memo((props: React.PropsWithChildren<ButtonProps>) => {
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
});

export default Button;
export { Button, ButtonProps };
