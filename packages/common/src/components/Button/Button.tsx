import React from "react";
import styles from "./Button.module.scss";
import { WithOverrides } from "../../types";
type ButtonProps = WithOverrides<
  React.PropsWithChildren<{
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onHover?: () => void;
    disabled?: boolean;
  }>
>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const override = props.override || "";
    return (
      <button
        className={`${styles.root} ${override}`}
        onClick={props.onClick}
        style={props.style}
        disabled={Boolean(props.disabled)}
        ref={ref}
      >
        {props.children}
      </button>
    );
  }
);

export { Button };
export type { ButtonProps };
