import React from "react";
import { createUseStyles } from "../../theme";
import { Button } from "../Button";

const useStyles = createUseStyles(function (theme: any) {
  return {
    root: {
      textAlign: "left",
      font: `${theme.headerBanner.fontWeight} ${theme.headerBanner.fontSize}/30px ${theme.headerBanner.font}`,
      letterSpacing: "0px",
      color: theme.headerBanner.color,
      opacity: "1",
      backgroundColor: theme.headerBanner.backgroundColor,
      padding: "18px 36px 18px 26px",
      display: "inline-block",
    },
  };
});

type HeaderBannerTextProps = {
  overrides?: any;
  bannerText: string;
};

const defaultProps: HeaderBannerTextProps = {
  overrides: null,
  bannerText: "hello",
};

function HeaderBannerText(props: HeaderBannerTextProps) {
  const styles = useStyles(props);
  return (
    <div className={styles.root} style={props.overrides}>
      <span>{props.bannerText}</span>
      <br />
      <span>Hello</span>
      <br />

      <Button>Hello</Button>
    </div>
  );
}

HeaderBannerText.defaultProps = defaultProps;
export default HeaderBannerText;
export { HeaderBannerText, HeaderBannerTextProps };
