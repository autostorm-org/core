import React from "react";
import { createUseStyles } from "../../theme";

const useStyles = createUseStyles(function (theme: any) {
  return {
    root: {
      background: `${theme.input.backgroundColor} 0% 0% no-repeat padding-box`,
      border: "1px solid #000000BF",
      borderRadius: "4px",
      opacity: "1",
      display: "flex",
      width: "100%",
      padding: "15px",
      boxSizing: "border-box",
      alignItems: "center",
      color: "#000000BF",
      paddingRight: 24,
      "&:focus-within": {
        borderColor: theme.palette.primary.main,
      },
    },
    input: {
      borderWidth: "0px",
      border: "none",
      width: "100%",
      textAlign: "left",
      fontSize: theme.input.fontSize,
      fontWeight: theme.input.fontWeight,
      fontFamily: theme.input.font,
      letterSpacing: "0",
      color: theme.input.color,
      margin: "0px 12px 0px 12px",
      "&:focus": { outline: "none" },
    },
  };
});

function Input(props: any) {
  const classes = useStyles(props);
  return (
    <div className={classes.root} style={props.style}>
      {props.iconLeft && <props.iconLeft />}
      <input
        className={classes.input}
        type="text"
        placeholder={props.placeholder}
      />
      {props.iconRight && <props.iconRight />}
    </div>
  );
}
export default Input;
