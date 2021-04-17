import React from "react";
import Footer from "./Footer";
import FooterRow from "./FooterRow";
import FooterRowHeader from "./FooterRowHeader";
import FooterRowText from "./FooterRowText";
import FooterLogo from "./FooterLogo";
import FooterRowsContainer from "./FooterRowsContainer";
import { Typography, TypographyVariant_ENUM } from "../Typography";
import { Twitter, Facebook, Instagram } from "react-feather";

import styles from "./FooterResponsive.module.scss";

type FooterResponsiveProps = {};

function FooterResponsive(props: FooterResponsiveProps) {
  return (
    <Footer>
      <FooterLogo
        logoPath={"/autofica-defi-day-logo.svg"}
        alt={"HEADER LOGO"}
      />

      <FooterRowsContainer>
        <FooterRow>
          <FooterRowHeader>About us</FooterRowHeader>
          <FooterRowText>
            Dapp that allows you to find the best overcollateralized loans for
            your next cryptocurrency car purchase.
          </FooterRowText>
        </FooterRow>
        <FooterRow>
          <FooterRowHeader>Contact us</FooterRowHeader>

          <FooterRowText>
            Contact email:
            <Typography variant={TypographyVariant_ENUM.link}>
              support@autofica.com
            </Typography>
          </FooterRowText>
        </FooterRow>

        <FooterRow override={styles.socialMediaRow}>
          <Twitter />
          <Facebook />
          <Instagram />
        </FooterRow>
      </FooterRowsContainer>
    </Footer>
  );
}
export default FooterResponsive;
export type { FooterResponsiveProps };
