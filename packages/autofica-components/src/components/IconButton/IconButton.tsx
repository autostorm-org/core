import React from "react";
import type {
  IClickable,
  IAriaLabel,
  IButton,
  IOverridable,
  IStylable,
} from "../../types";
import styles from "./IconButton.module.scss";

interface IButtonBaseProps
  extends IClickable<HTMLButtonElement>,
    IAriaLabel,
    IButton,
    IOverridable,
    IStylable {}

const IconButton = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<IButtonBaseProps>
>((props, ref) => {
  const overrideClassName = props.override ?? "";
  return (
    <button
      className={`${styles.root} ${overrideClassName}`}
      style={props.style}
      title={props.title}
      ref={ref}
      onClick={props.onClick}
      disabled={props.disabled}
      aria-label={props["aria-label"]}
    >
      {props.children}
    </button>
  );
});
export default IconButton;
export type { IButtonBaseProps };
