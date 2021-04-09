import { createUseStyles } from "../../theme";

const useStyles = createUseStyles(function (theme: any) {
  return {
    root: {
      color: theme.palette.primary.main,
    },
    h1: {
      textAlign: "left",
      font: "normal normal bold 48px/62px PT Sans",
      letterSpacing: "0px",
      color: theme.typography.color,
      opacity: "1",
    },
    h2: {
      textAlign: "left",
      font: "normal normal bold 36px/47px PT Sans",
      letterSpacing: "0px",
      color: theme.typography.color,
      opacity: "1",
    },
    h3: {
      textAlign: "left",
      font: "normal normal bold 24px/33px Open Sans",
      letterSpacing: "0px",
      color: theme.typography.color,
      opacity: "1",
    },
    h4: {
      textAlign: "left",
      font: "normal normal bold 18px/24px Open Sans",
      letterSpacing: "0px",
      color: theme.typography.color,
      opacity: "1",
    },
    h5: {
      textAlign: "left",
      font: "normal normal bold 16px/22px Open Sans",
      letterSpacing: "0px",
      color: theme.typography.color,
      opacity: "1",
    },
    h6: {
      textAlign: "left",
      font: "normal normal bold 14px/19px Open Sans",
      letterSpacing: "0px",
      color: theme.typography.color,
      opacity: "1",
    },
    p: {
      textAlign: "left",
      font: "normal normal normal 16px/22px Open Sans",
      fontWeight: 500,
      letterSpacing: "0px",
      color: theme.typography.color,
      opacity: "1",
    },
    link: {
      textAlign: "left",
      font: "normal normal normal 16px/22px Open Sans",
      letterSpacing: "0px",
      color: "#0085C9",
      opacity: "1",
    },
  };
});

export default useStyles;
