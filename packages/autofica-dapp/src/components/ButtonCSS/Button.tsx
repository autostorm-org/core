import React from "react";
import "./styles.css";

type ButtonProps = {
  onClick?: () => void;
  onHover?: () => void;
  overrides?: { [key: string]: any };
  disabled?: boolean;
};

function Button(props: React.PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={"root"}
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
