import React from "react";
import styles from "./Input.module.scss";
import type {
  IOverridable,
  IStylable,
  IAriaCombobox,
  IAriaLabel,
} from "../../types";

type InputSupportedType =
  | "text"
  | "number"
  | "file"
  | "email"
  | "date"
  | "tel"
  | "password";

interface InputProps
  extends IOverridable,
    IStylable,
    IAriaCombobox,
    IAriaLabel {
  iconLeft?: React.JSXElementConstructor<{}>;
  iconRight?: React.JSXElementConstructor<{}>;
  placeholder?: string;
  type?: InputSupportedType;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onFocusCapture?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  id: string;
  autocomplete?: string;
  value?: string;
  role?: string;
}
const Input = React.forwardRef<HTMLLabelElement, InputProps>((props, ref) => {
  return (
    <label
      className={`${styles.root} ${props.override || ""}`}
      style={props.style}
      htmlFor={props.id}
      ref={ref}
      aria-label={props["aria-label"]}
    >
      {props.iconLeft && <props.iconLeft />}
      <input
        className={styles.input}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onFocusCapture={props.onFocusCapture}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        autoComplete={props.autocomplete}
        id={props.id}
        role={props.role}
        aria-autocomplete={props["aria-autocomplete"]}
        aria-haspopup={props["aria-haspopup"]}
        aria-owns={props["aria-owns"]}
        aria-expanded={props["aria-expanded"]}
        aria-activedescendant={props["aria-activedescendant"]}
      />
      {props.iconRight && <props.iconRight />}
    </label>
  );
});
export default React.memo(Input);
export type { InputProps, InputSupportedType };
