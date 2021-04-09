import React from "react";
import { createUseStyles } from "../../theme";

const useStyles = createUseStyles(function (theme: any) {
  return {
    root: {
      margin: "0px auto 0px auto",
      padding: "0px 60px 0px 60px",
      maxWidth: "1200px",
      width: "100%",
      boxSizing: "border-box",

      "@media (max-width:425px)": {
        padding: "0px 20px 0px 20px",
      },

      "@media (max-width:320px)": {
        padding: "0px 5px 0px 5px",
      },
    },
  };
});

type themeOverrides = {
  root?: object;
};
type BoundedRowProps = {
  children: any;
  themeOverrides?: themeOverrides;
  fullWidth?: boolean;
};

function BoundedRow(props: BoundedRowProps) {
  const styles = useStyles();
  console.log(
    `BoundedRow, ${JSON.stringify(
      props.themeOverrides != null ? props.themeOverrides.root : {}
    )}`
  );
  return (
    <div
      className={`${styles.root}`}
      style={props.fullWidth ? { width: "100%" } : {}}
    >
      {props.children}
    </div>
  );
}
export default BoundedRow;
export { BoundedRow, BoundedRowProps };
