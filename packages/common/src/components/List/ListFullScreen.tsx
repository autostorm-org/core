import React from "react";
import { createUseStyles } from "../../theme";

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

type ListFullScreenProps = {
  rowRenderer?: any;
  list?: Array<any>;
  overrides?: any;
  children?: any;
};

function ListFullScreen(props: ListFullScreenProps) {
  const styles = useStyles();
  return (
    <div className={styles.root} style={props.overrides}>
      {props.children}
    </div>
  );
}
export default ListFullScreen;
