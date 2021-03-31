// React
import React from "react";
// Styles
import useStyles from "./styles";
// type import
import { WithStyleOverride } from "../../types";

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

type TypeTypographyProps = WithStyleOverride<{
  children?: React.ReactNode;
  variant: EnumTypographyVariant;
}>;

function Typography(props: TypeTypographyProps) {
  const styles = useStyles();
  const className = styles[props.variant];
  return (
    <span className={className} style={props.override}>
      {props.children}
    </span>
  );
}
export default Typography;
export { EnumTypographyVariant, TypeTypographyProps };
