import React from "react";
import { ReactComponent as OuterCircle } from "./radio-input-outer-circle.svg";
import { ReactComponent as Overlay } from "./radio-input-overlay.svg";
import { RadioContext } from "./RadioInputContext";
import type {
  IIdentifiable,
  IAriaLabel,
  IChangeable,
  IFocusable,
  IStylable,
  IOverridable,
} from "../../types";
import styles from "./RadioInput.module.scss";

const RADIOTYPE = "radio" as "radio";

interface IRadioInputProps
  extends IAriaLabel,
    IChangeable<HTMLInputElement>,
    IFocusable<HTMLInputElement>,
    IIdentifiable,
    IStylable,
    IOverridable {
  name: string;
  value: string;
  checked?: boolean;
  leftVisualLabel?: React.ReactNode;
  rightVisualLabel?: React.ReactNode;
  disabled?: boolean;
}

const useOnChangeHandler = (setValue: (_value: string) => void) => {
  return React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [setValue]
  );
};

const RadioInput = React.forwardRef<HTMLLabelElement, IRadioInputProps>(
  (props, ref) => {
    const radioContext = React.useContext(RadioContext);
    const onChange = useOnChangeHandler(radioContext.setValue);
    const overlayClassName = `${styles.overlay} ${
      radioContext.value == props.value ? styles.overlayVisible : ""
    }`;
    return (
      <label
        role={RADIOTYPE}
        className={`${styles.root} ${
          props.disabled ? styles.disabledText : ""
        }`}
        htmlFor={props.id}
        aria-label={props["aria-label"]}
        aria-checked={radioContext.value == props.value}
        ref={ref}
      >
        {props.leftVisualLabel}
        <span className={styles.svgContainer}>
          <input
            className={styles.input}
            type={RADIOTYPE}
            id={props.id}
            onChange={onChange}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            onFocusCapture={props.onFocusCapture}
            name={radioContext.name}
            value={props.value}
            checked={radioContext.value == props.value}
            disabled={props.disabled}
          ></input>

          <OuterCircle className={styles.outerCircle} />
          <Overlay className={overlayClassName} />
        </span>
        {props.rightVisualLabel}
      </label>
    );
  }
);
export default RadioInput;
export { RadioContext };
export type { IRadioInputProps };
