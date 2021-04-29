import React from "react";
import { Card } from "../Card";
import type { IOverridable } from "../../types";
import styles from "./DashboardTemplate.module.scss";

interface DashboardTemplateProps extends IOverridable {
  overrideOptionsCol?: string;
  overrideMainCol?: string;
  optionsContent: React.ReactNode;
  mainContent: React.ReactNode;
}

const DashboardTemplate = (props: DashboardTemplateProps) => {
  const overrideClass = props.override || "";
  const overrideOptionsCol = props.overrideOptionsCol || "";
  const overrideMainCol = props.overrideMainCol || "";

  return (
    <Card override={`${styles.root} ${overrideClass}`}>
      <div className={`${styles.optionsCol} ${overrideOptionsCol}`}>
        {props.optionsContent}
      </div>
      <div className={`${styles.mainCol} ${overrideMainCol}`}>
        {props.mainContent}
      </div>
    </Card>
  );
};
export default DashboardTemplate;
export type { DashboardTemplateProps };
