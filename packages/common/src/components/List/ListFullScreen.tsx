import React from "react";
import type { WithOverrides } from "../../types";
import styles from "./ListFullScreen.module.scss";

type ListFullScreenProps = WithOverrides<
  React.PropsWithChildren<{
    rowRenderer?: any;
    list?: Array<any>;
  }>
>;

const ListFullScreen = (props: ListFullScreenProps) => {
  const classOverride = props.override || "";
  return (
    <div className={`${styles.root} ${classOverride}`} style={props.style}>
      {props.children}
    </div>
  );
};
export default ListFullScreen;
export type { ListFullScreenProps };
