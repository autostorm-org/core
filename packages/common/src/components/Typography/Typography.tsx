// React
import React from "react";
import { TypographyVariant_ENUM } from "./constants";
// type import
import type { IOverridable, IIdentifiable, IStylable } from "../../types";
// Styles
import styles from "./Typography.module.scss";

interface ITypographyProps extends IOverridable, IIdentifiable, IStylable {
  variant: TypographyVariant_ENUM;
}

function Typography(props: React.PropsWithChildren<ITypographyProps>) {
  const className = styles[props.variant];
  const overrideClassName = props.override || "";
  return (
    <span className={`${className} ${overrideClassName}`} style={props.style}>
      {props.children}
    </span>
  );
}
export default Typography;
export type { ITypographyProps };
