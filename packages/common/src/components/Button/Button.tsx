import React from "react";
import { createUseStyles } from "../../theme";

const useStyles = createUseStyles(function (theme: any) {
  return {
    root: {
      backgroundColor: theme.button.backgroundColor,
      color: theme.button.color,
      padding: "14px 16px 14px 16px",
      border: "none",
      borderRadius: "4px",
      textAlign: "left",
      font: "normal normal bold 14px/22px Open Sans",
      fontWeight: 500,
      letterSpacing: "0px",
      opacity: "1",
      transition: "0.4s",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: theme.button.backgroundColorHover,
      },
      "&:active": {
        backgroundColor: theme.button.backgroundColorActive,
      },
      "&:focus, &:focus-within": {
        boxShadow: `0 0 0 0.2rem ${theme.button.colorFocusOutline}`,
        outline: "none",
      },
    },
  };
});

type ButtonProps = {
  onClick?: () => void;
  onHover?: () => void;
  overrides?: { [key: string]: any };
};

function Button(props: React.PropsWithChildren<ButtonProps>) {
  const styles = useStyles(props);
  return (
    <button
      className={styles.root}
      onClick={props.onClick}
      style={props.overrides}
    >
      {props.children}
    </button>
  );
}
export default Button;
export { Button, ButtonProps };
