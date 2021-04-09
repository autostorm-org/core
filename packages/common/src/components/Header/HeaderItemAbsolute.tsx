import React from "react";
import { createUseStyles } from "../../theme";
import { HeaderLocations } from "./constants";

const useStyles = createUseStyles(function (theme: any) {
  return {
    root: {
      position: "absolute",
      right: ({ itemLocation }: HeaderItemAbsoluteProps) =>
        itemLocation == HeaderLocations.right ? 20 : "auto",
      left: ({ itemLocation }: HeaderItemAbsoluteProps) =>
        itemLocation == HeaderLocations.left ? 20 : "auto",
      listStyleType: "none",
    },
  };
});

type HeaderItemAbsoluteProps = {
  itemLocation: HeaderLocations;
  onClick?: Function;
  children?: any;
};

const defaultProps: HeaderItemAbsoluteProps = {
  itemLocation: HeaderLocations.left,
};

function HeaderItemAbsolute(props: HeaderItemAbsoluteProps) {
  const styles = useStyles();
  return (
    <li className={styles.root}>
      <a
        href="#"
        onClick={function (e) {
          e.preventDefault();
          props.onClick && props.onClick(e);
        }}
      >
        {props.children}
      </a>
    </li>
  );
}

HeaderItemAbsolute.defaultProps = defaultProps;
export default HeaderItemAbsolute;
export { HeaderItemAbsolute, HeaderItemAbsoluteProps };
