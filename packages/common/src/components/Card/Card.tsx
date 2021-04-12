import React from "react";
import useStyles from "./styles";
import { WithChildren, withOverrides } from "../../types";

type CardPropsType = withOverrides<WithChildren<{}>>;

function Card(props: CardPropsType) {
  const styles = useStyles();
  return (
    <div className={`${styles.root} ${props.override}`} style={props.style}>
      {props.children}
    </div>
  );
}
export default Card;
export { Card };
export type { CardPropsType };
