import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(function (theme: any) {
  return {
    root: {
      backgroundColor: "#012169",
      color: "#FFFFFF",
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
        backgroundColor: "#001034",
      },
      "&:active": {
        backgroundColor: "#001034",
      },
      "&:focus, &:focus-within": {
        boxShadow: `0 0 0 0.2rem #B3B3B3`,
        outline: "none",
      },
    },
  };
});

export default useStyles;
