import React from "react";
import { Typography, TypographyVariant_ENUM } from "../Typography";
import { BoundedRow } from "../BoundedRow";
import type { WithOverrides } from "../../types";
import styles from "./InstructionsRow.module.scss";

type Step = Readonly<{
  visualOrder: string;
  content: string;
}>;

type InstructionsRowProps = WithOverrides<{
  steps: Array<Step>;
}>;

const InstructionsRow = (props: InstructionsRowProps) => {
  return (
    <div className={`${styles.root} ${props.override || ""}`}>
      <BoundedRow>
        <div className={styles.instructionsWrapper}>
          {props.steps.map((step) => {
            return (
              <div className={styles.instructionGroup}>
                <div className={styles.circle}>
                  <Typography
                    variant={TypographyVariant_ENUM.p}
                    override={styles.circleText}
                  >
                    {step.visualOrder}
                  </Typography>
                </div>
                <Typography
                  variant={TypographyVariant_ENUM.p}
                  override={styles.stepText}
                >
                  {step.content}
                </Typography>
              </div>
            );
          })}
        </div>
      </BoundedRow>
    </div>
  );
};
export default InstructionsRow;
export type { InstructionsRowProps };
