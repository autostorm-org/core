import React from "react";
import { BoundedRow } from "../BoundedRow";
import { Typography, TypographyVariant_ENUM } from "../Typography";
import { useStaticThemeContext } from "../Themeing";
import { ImageLoadable } from "../ImageLoadable";
import { Loader } from "../Loader";
import { Button } from "../Button";

import { WithClassOverride } from "../../types";
import styles from "./ManagerRow.module.scss";

type RowButton = WithClassOverride<{
  content: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}>;

type ManagerRowProps = {
  rowTitle: string;
  rowDescription: string;
  rowButtons: Array<RowButton>;
};

const ProtocolImage = () => {
  const themeingContext = useStaticThemeContext();
  const themeName = themeingContext.theme?.name;
  return (
    <ImageLoadable
      src={`/${themeName || "day"}-theme-manager-row.svg`}
      className={styles.illustration}
      alt={"Manage your loans with the dashboard."}
      loader={<Loader />}
    />
  );
};

const ManagerRow = (props: ManagerRowProps) => {
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
              {props.rowButtons.map((button) => {
                return (
                  <Button onClick={button.onClick} override={button.override}>
                    {button.content}
                  </Button>
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
export default ManagerRow;
export type { ManagerRowProps };
