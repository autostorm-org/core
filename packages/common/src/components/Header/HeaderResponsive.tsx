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
  onClick?: (event: any) => void;
  href?: string;
}

type HeaderResponsiveProps = WithClassOverride<{
  options: Array<IHeaderItem>;
}>;

function HeaderResponsive(props: HeaderResponsiveProps) {
  const [isOpen, setOpen] = React.useState(false);
  const node = React.useRef<HTMLDivElement | null>(null);
  const onToggle = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      setOpen(!isOpen);
    },
    [isOpen]
  );

  const func = (e: FocusEvent) => {
    if (node.current?.contains(e.target as Node) == false) {
      setOpen(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener("focusin", func);

    return () => {
      document.removeEventListener("focusin", func);
    };
  });
  return (
    <Header
      submenu={
        <ListFullScreen
          override={`${styles.fullScreenMenyReponsive} ${
            isOpen == false ? styles.hiddenMenu : ""
          }`}
          aria-labeledby="Mobile Menu"
          role="menu"
          ref={node}
        >
          {props.options.map((option) => {
            return (
              <>
                <ListFullScreenRow onClick={option.onClick} href={option.href}>
                  {option.content}
                </ListFullScreenRow>
              </>
            );
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
          <HeaderItem
            override={styles.desktopNavItem}
            onClick={option.onClick}
            href={option.href}
          >
            {option.content}
          </HeaderItem>
        );
      })}

      <HeaderItemAbsolute
        id={"Mobile Menu"}
        itemLocation={HeaderLocations.right}
        override={styles.menuReponsiveIcon}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label={"Mobile navigation menu toggle"}
      >
        <Menu color="white" />
      </HeaderItemAbsolute>
    </Header>
  );
}
export default HeaderResponsive;
export type { HeaderResponsiveProps };
