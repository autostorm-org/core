// React
import React from "react";
import { TypographyVariant_ENUM } from "./constants";
// type import
import { WithOverrides } from "../../types";
// Styles
import styles from "./Typography.module.scss";

type TypeTypographyProps = WithOverrides<
  React.PropsWithChildren<{
    variant: TypographyVariant_ENUM;
  }>
>;

function Typography(props: TypeTypographyProps) {
  const className = styles[props.variant];
  const overrideClassName = props.override || "";
  return (
    <span className={`${className} ${overrideClassName}`} style={props.style}>
      {props.children}
    </span>
  );
}
export default Typography;
export type { TypeTypographyProps };
