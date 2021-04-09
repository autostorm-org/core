import React from "react";
import useStyles from "./styles";

type ButtonProps = {
  onClick?: () => void;
  onHover?: () => void;
  overrides?: { [key: string]: any };
  disabled?: boolean;
};

function Button(props: React.PropsWithChildren<ButtonProps>) {
  const styles = useStyles();
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
}
export default Button;
export type { ButtonProps };
