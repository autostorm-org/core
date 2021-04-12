// React
import React from "react";
// type import
import { WithOverrides } from "../../types";
// Styles
import styles from "./Typography.module.css";

enum EnumTypographyVariant {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  p = "p",
  link = "link",
}

type TypeTypographyProps = WithOverrides<
  React.PropsWithChildren<{
    variant: EnumTypographyVariant;
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
export { Typography, EnumTypographyVariant };
export type { TypeTypographyProps };
