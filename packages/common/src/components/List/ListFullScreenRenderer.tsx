import React from "react";
import { createUseStyles } from "../../theme";

const useStyles = createUseStyles(function (theme) {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      paddingLeft: "0",
      marginBottom: "0",
      listStyle: "none",
      "&:hover": {
        backgroundColor: theme.palette.white.dark,
        color: theme.palette.white.contrast,
      },
      "&:focus, &:focus-within": {
        // boxShadow: `0 0 0 0.1rem ${theme.palette.accent.blue}`,
        // outline: "none",
        zIndex: 10,
      },
      "&:active": {
        backgroundColor: theme.palette.white.darker,
      },
    },
    content: {
      display: "inline-block",
      marginRight: "auto",
      textAlign: "left",
      font: "500 18px/25px Roboto",
      letterSpacing: "0",
      backgroundColor: "transparent",
      color: theme.palette.white.contrast,
      opacity: "1",
      boxSizing: "border-box",
      padding: "10px 24px 10px 24px",
      userSelect: "none",
      transition: "0.3s",
      whiteSpace: "nowrap",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none",
      },
      "&:active": {},
    },
    submenu: { padding: 0 },
  };
});
type ListFullScreenRendererProps = {
  onClick: Function;
  children?: any;
  href: string;
};

const defaultProps: ListFullScreenRendererProps = {
  onClick: () => {},
  children: null,
  href: "#",
};

function ListFullScreenRenderer(props: ListFullScreenRendererProps) {
  const styles = useStyles(props);
  return (
    <li className={styles.root}>
      <a href={props.href} className={styles.content}>
        {props.children}
      </a>
    </li>
  );
}

ListFullScreenRenderer.defaultProps = defaultProps;
export { ListFullScreenRenderer };
export default ListFullScreenRenderer;
