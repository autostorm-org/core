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
      fontWeight: 700,
      letterSpacing: "0px",
      opacity: "1",
      transition: "0.4s",
      lineHeight: "19px",
      cursor: "pointer",
      userSelect: "none",
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

export default useStyles;
