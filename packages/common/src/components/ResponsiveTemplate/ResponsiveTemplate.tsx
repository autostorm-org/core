import React from "react";
import { useMediaQuery } from "react-responsive";
import { createUseStyles } from "../../theme";

import { theming } from "../../theme";

const useStyles = createUseStyles((theme: any) => ({
  mobileContainer: {
    display: "none",
  },
  tabletContainer: {
    display: "none",
  },
  desktopContainer: {
    display: "none",
  },
  [`@media (max-width: ${theme.layout.mobile.max}px)`]: {
    mobileContainer: {
      display: "block",
    },
  },

  [`@media (min-width: ${theme.layout.tablet.min}px) and (max-width:${theme.layout.tablet.max}px)`]: {
    mobileContainer: {
      display: "none",
    },
    tabletContainer: {
      display: "block",
    },
    desktopContainer: {
      display: "none",
    },
  },
  [`@media (min-width: ${theme.layout.desktop.min}px)`]: {
    desktopContainer: {
      display: "block",
    },
  },
}));

type ResponsiveTemplateProps = {
  mobile: any;
  tablet: any;
  desktop: any;
  headerProps?: any;
};

function ResponsiveTemplate(props: ResponsiveTemplateProps) {
  const theme = theming.useTheme();
  const styles = useStyles();
  const isMobile = useMediaQuery({ maxWidth: theme.layout.mobile.max });
  const isTablet = useMediaQuery({
    maxWidth: theme.layout.tablet.max,
    minWidth: theme.layout.tablet.min,
  });

  return (
    <>
      <div className={styles.mobileContainer} aria-hidden={!isMobile}>
        <props.mobile {...props.headerProps} />
      </div>
      <div
        className={styles.tabletContainer}
        aria-hidden={isMobile || !isTablet}
      >
        <props.tablet {...props.headerProps} />
      </div>
      <div
        className={styles.desktopContainer}
        aria-hidden={isMobile || isTablet}
      >
        <props.desktop {...props.headerProps} />
      </div>
    </>
  );
}
export default ResponsiveTemplate;
