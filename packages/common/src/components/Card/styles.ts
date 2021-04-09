import { createUseStyles } from "../../theme";

const useStyles = createUseStyles(function (theme: any) {
  return {
    root: {
      background: `${theme.card.backgroundColor} 0% 0% no-repeat border-box`,
      border: `1px solid ${theme.card.borderColor}`,
      opacity: "1",
      padding: "10px 24px 10px 24px",
      borderRadius: "8px",
    },
  };
});

export default useStyles;
