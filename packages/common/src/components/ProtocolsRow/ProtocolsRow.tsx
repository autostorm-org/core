import React from "react";
import { BoundedRow } from "../BoundedRow";
import { Typography, TypographyVariant_ENUM } from "../Typography";
import { useStaticThemeContext } from "../Themeing";
import { ImageLoadable } from "../ImageLoadable";
import { Loader } from "../Loader";

import { WithStyleOverride } from "../../types";
import styles from "./ProtocolsRow.module.scss";

type Logo = WithStyleOverride<{
  src: string;
  className?: string;
  alt: string;
  loader?: React.ReactNode;
}>;

type ProtocolsRowProps = {
  rowTitle: string;
  rowDescription: string;
  rowLogos: Array<Logo>;
};

const ProtocolImage = () => {
  const themeingContext = useStaticThemeContext();
  const themeName = themeingContext.theme?.name;
  return (
    <ImageLoadable
      src={`/${themeName || "day"}-theme-protocols-row.svg`}
      className={styles.illustration}
      alt={
        "Supported cryptocurrencies to get an overcollateralized loan. BTC ETH "
      }
      loader={<Loader />}
    />
  );
};

const ProtocolsRow = (props: ProtocolsRowProps) => {
  return (
    <div className={styles.root}>
      <BoundedRow>
        <div className={styles.grid}>
          <div className={styles.textContainer}>
            <h2 className={styles.textTitle}>
              <Typography
                variant={TypographyVariant_ENUM.h3}
                override={styles.textTitleOverride}
              >
                {props.rowTitle}
              </Typography>
            </h2>
            <p className={styles.textDescription}>
              <Typography variant={TypographyVariant_ENUM.p}>
                {props.rowDescription}
              </Typography>
            </p>
            <div className={styles.logosContainer}>
              {props.rowLogos.map((rowLogo) => {
                return (
                  <ImageLoadable
                    src={rowLogo.src}
                    alt={rowLogo.alt}
                    loader={rowLogo.loader}
                    className={rowLogo.className}
                    style={rowLogo.style}
                  />
                );
              })}
            </div>
          </div>

          <div className={styles.illustrationContainer}>
            <ProtocolImage />
          </div>
        </div>
      </BoundedRow>
    </div>
  );
};
export default ProtocolsRow;
export type { ProtocolsRowProps };
