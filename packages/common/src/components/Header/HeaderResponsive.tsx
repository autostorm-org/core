import React from "react";
import Header from "./Header";
import HeaderLogo from "./HeaderLogo";
import { HeaderLocations } from "./constants";
import HeaderItem from "./HeaderItem";
import { ListFullScreen, ListFullScreenRow } from "../List";
import HeaderItemAbsolute from "./HeaderItemAbsolute";
import { Menu } from "react-feather";

import { WithClassOverride } from "../../types";
import styles from "./HeaderResponsive.module.scss";

interface IHeaderItem {
  content: React.ReactNode;
}

type HeaderResponsiveProps = WithClassOverride<{
  options: Array<IHeaderItem>;
}>;

function HeaderResponsive(props: HeaderResponsiveProps) {
  const [isOpen, setOpen] = React.useState(false);
  const onToggle = React.useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);
  return (
    <Header
      submenu={
        <ListFullScreen
          override={`${styles.fullScreenMenyReponsive} ${
            isOpen == false ? styles.hiddenMenu : ""
          }`}
        >
          {props.options.map((option) => {
            return <ListFullScreenRow>{option.content}</ListFullScreenRow>;
          })}
        </ListFullScreen>
      }
      override={props.override}
    >
      <HeaderLogo
        logoPath={"/autofica-defi-day-logo.svg"}
        itemLocation={HeaderLocations.center}
        override={styles.headerResponsiveLogo}
        alt={"HEADER LOGO"}
      />

      {props.options.map((option) => {
        return (
          <HeaderItem override={styles.desktopNavItem}>
            {option.content}
          </HeaderItem>
        );
      })}

      <HeaderItemAbsolute
        itemLocation={HeaderLocations.right}
        override={styles.menuReponsiveIcon}
        onClick={onToggle}
      >
        <Menu color="white" />
      </HeaderItemAbsolute>
    </Header>
  );
}
export default HeaderResponsive;
export type { HeaderResponsiveProps };
