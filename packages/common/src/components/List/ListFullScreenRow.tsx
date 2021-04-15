import React from "react";
import styles from "./ListFullScreenRow.module.scss";
type ListFullScreenRowProps = React.PropsWithChildren<{
  onClick?: Function;
  href?: string;
}>;

function ListFullScreenRow(props: ListFullScreenRowProps) {
  return (
    <li className={styles.root}>
      <a href={props.href} className={styles.content}>
        {props.children}
      </a>
    </li>
  );
}

export default ListFullScreenRow;
export type { ListFullScreenRowProps };
