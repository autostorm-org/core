import React from "react";
import { BoundedRow } from "../BoundedRow";
import { TypographyVariant_ENUM, Typography } from "../Typography";
import Button from "../Button";
import Card from "../Card";
import styles from "./HeaderBanner.module.scss";

type HeaderBannerPropsType = {
  disabled?: boolean;
  bannerImageAltText: string;
  cardTitle: string;
  cardText: string;
  cardCTA: string;
  onClick?: () => void;
  bannerImageSrc: string;
};

function HeaderBanner(props: HeaderBannerPropsType) {
  return (
    <div className={styles.root}>
      <BoundedRow>
        <div className={styles.flexContainer}>
          <div className={styles.headerBannerCardWrapper}>
            <div className={styles.headerBannerContainer}>
              <Card override={styles.bannerCardOverride}>
                <Typography
                  variant={TypographyVariant_ENUM.h1}
                  override={styles.titleOverride}
                >
                  {props.cardTitle}
                </Typography>
                <br />
                <Typography variant={TypographyVariant_ENUM.p}>
                  {props.cardText}
                </Typography>
                <br />
                <Button
                  onClick={props.onClick}
                  override={styles.buttonOverride}
                >
                  {props.cardCTA}
                </Button>
              </Card>
            </div>
          </div>

          <div className={styles.carImage}>
            <img
              alt={props.bannerImageAltText}
              src={props.bannerImageSrc}
              className={styles.headerBannerImage}
              loading="lazy"
            />
          </div>
        </div>
      </BoundedRow>
    </div>
  );
}
export default HeaderBanner;
