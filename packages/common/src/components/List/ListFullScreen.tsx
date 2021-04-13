import React from "react";
import { createUseStyles } from "../../theme";
import type { WithOverrides } from "../../types";

const useStyles = createUseStyles(function (theme: any) {
  return {
    root: {
      color: theme.palette.primary.main,
      position: "absolute",
      right: 0,
      width: "100%",
      height: "100%",
      zIndex: 20,
      backgroundColor: theme.list.backgroundColor,
    },
  };
});

type ListFullScreenProps = WithOverrides<
  React.PropsWithChildren<{
    rowRenderer?: any;
    list?: Array<any>;
  }>
>;

function ListFullScreen(props: ListFullScreenProps) {
  const styles = useStyles();
  const classOverride = props.override || "";
  return (
    <div className={`${styles.root} ${classOverride}`} style={props.style}>
      {props.children}
    </div>
  );
}
export default ListFullScreen;
export type { ListFullScreenProps };
