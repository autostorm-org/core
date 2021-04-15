import React from "react";
import styles from "./Input.module.scss";
import type { WithOverrides } from "../../types";

type InputProps = WithOverrides<{
  iconLeft?: React.JSXElementConstructor<{}>;
  iconRight?: React.JSXElementConstructor<{}>;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}>;

const Input = (props: InputProps) => {
  return (
    <div className={styles.root} style={props.style}>
      {props.iconLeft && <props.iconLeft />}
      <input
        className={styles.input}
        type="text"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      {props.iconRight && <props.iconRight />}
    </div>
  );
};
export default React.memo(Input);
export type { InputProps };
