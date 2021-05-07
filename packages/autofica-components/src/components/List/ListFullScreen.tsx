import React from "react";
import type { WithOverrides } from "../../types";
import styles from "./ListFullScreen.module.scss";

type ListFullScreenProps = WithOverrides<
  React.PropsWithChildren<{
    rowRenderer?: any;
    list?: Array<any>;
    "aria-labeledby"?: string;
    role?: string;
    onBlur?: React.FocusEventHandler<HTMLDivElement>;
  }>
>;

const ListFullScreen = React.forwardRef<HTMLDivElement, ListFullScreenProps>(
  (props, ref) => {
    const classOverride = props.override || "";
    return (
      <div
        className={`${styles.root} ${classOverride}`}
        style={props.style}
        role={props.role}
        aria-labeledby={props["aria-labeledby"]}
        onBlur={props.onBlur}
        ref={ref}
      >
        {props.children}
      </div>
    );
  }
);
export default ListFullScreen;
export type { ListFullScreenProps };
