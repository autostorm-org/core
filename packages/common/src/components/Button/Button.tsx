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
  console.log("render");
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

export default React.memo(Button);
export { Button, ButtonProps };
