import React from "react";
import { createUseStyles } from "../../theme";
import { HeaderLocations } from "./constants";

const useStyles = createUseStyles(function (theme: any) {
  return {
    root: {
      height: "auto",
      width: "150px",
      marginRight: ({ itemLocation }: HeaderIconProps) =>
        itemLocation == HeaderLocations.left ||
        itemLocation == HeaderLocations.center
          ? "auto"
          : "0px",
      marginLeft: ({ itemLocation }: HeaderIconProps) =>
        itemLocation == HeaderLocations.right ||
        itemLocation == HeaderLocations.center
          ? "auto"
          : "0px",
      listStyleType: "none",
    },
  };
});

type HeaderIconProps = {
  logoPath: string;
  alt: string;
  width: string;
  height: string;
  itemLocation: HeaderLocations;
  overrides?: object;
};

const defaultProps: HeaderIconProps = {
  logoPath: "",
  alt: "",
  width: "auto",
  height: "auto",
  itemLocation: HeaderLocations.left,
  overrides: undefined,
};

function HeaderIcon(props: HeaderIconProps) {
  const styles = useStyles(props);
  return (
    <li className={styles.root} style={props.overrides}>
      <a href="/" role="menuitem">
        <img
          src={props.logoPath}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
      </a>
    </li>
  );
}

HeaderIcon.defaultProps = defaultProps;
export default HeaderIcon;
export { HeaderIcon, HeaderIconProps };
