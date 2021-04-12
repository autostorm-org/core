import React from "react";
import { Card } from "../Card";
import { BoundedRow } from "../BoundedRow";
import { EnumTypographyVariant, Typography } from "../Typography";
import Button from "../Button";
import { createUseStyles } from "../../theme";
import testcargoodcrop from "../../assets/carillustration.svg";
import ResponsiveTemplate from "../ResponsiveTemplate";
import { theming } from "../../theme";
import { useMediaQuery } from "react-responsive";

const useStyles = createUseStyles((theme: any) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    flexDirection: "row",
    alignItems: "flex-end",
    display: "flex",
    paddingTop: 68,
    paddingBottom: 68,
  },
  flexContainer: {
    display: "flex",
    alignItems: "center",
  },
  headerBannerContainer: {
    maxWidth: 560,
  },

  carImage: {
    zIndex: 50,
    display: "flex",
    flex: 1,
    maxWidth: 400,
  },
  bannerCardOverride: { padding: "30px" },
  [`@media (max-width: ${theme.layout.mobile.max}px)`]: {
    carImage: {
      display: "none",
    },
    root: {
      paddingTop: 33,
      paddingBottom: 33,
    },
    bannerCardOverride: { padding: "24px 10px" },
  },
  [`@media (min-width: ${theme.layout.tablet.min}px) and (max-width:${theme.layout.tablet.max}px)`]: {
    carImage: {
      display: "none",
    },
  },
}));

type HeaderBannerPropsType = {
  title: string;
  description: string;
  ctaDescription: string;
  onClick?: () => void;
  disabled?: boolean;
};

function HeaderBanner(props: HeaderBannerPropsType) {
  const theme = theming.useTheme();
  const styles = useStyles();
  const isMobile = useMediaQuery({ maxWidth: theme.layout.mobile.max });
  const isTablet = useMediaQuery({
    maxWidth: theme.layout.tablet.max,
    minWidth: theme.layout.tablet.min,
  });

  return (
    <div className={styles.root}>
      <BoundedRow>
        {isMobile || isTablet ? (
          <Card override={styles.bannerCardOverride}>
            <Typography variant={EnumTypographyVariant.h3}>
              Crypto car loan finder
            </Typography>
            <br />
            <Typography variant={EnumTypographyVariant.p}>
              Get a collateralized loan for your next car purchase. Chose your
              backing assets. Powered by Multiplier.{" "}
            </Typography>
            <br />
            <Button onClick={() => {}} overrides={{ marginTop: 9 }}>
              Call to action
            </Button>
          </Card>
        ) : (
          <>
            <div className={styles.flexContainer}>
              <div style={{ display: "flex", flex: 1, marginRight: 20 }}>
                <div className={styles.headerBannerContainer}>
                  <Card override={styles.bannerCardOverride}>
                    <Typography variant={EnumTypographyVariant.h1}>
                      Crypto car loan finder
                    </Typography>
                    <br />
                    <Typography variant={EnumTypographyVariant.p}>
                      Get a collateralized loan for your next car purchase.
                      Chose your backing assets. Powered by Multiplier.{" "}
                    </Typography>
                    <br />
                    <Button onClick={() => {}} overrides={{ marginTop: 10 }}>
                      Call to action
                    </Button>
                  </Card>
                </div>
              </div>

              <div className={styles.carImage}>
                <img
                  alt={"Car"}
                  src={testcargoodcrop}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </>
        )}
      </BoundedRow>
    </div>
  );
}
export default HeaderBanner;
