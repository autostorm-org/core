import React from "react";
import { BoundedRow } from "../BoundedRow";
import { WithOverrides } from "../../types";

import styles from "./Footer.module.scss";

type FooterProps = WithOverrides<React.PropsWithChildren<{}>>;

function Footer(props: FooterProps) {
  return (
    <div className={styles.root}>
      <BoundedRow>
        <div className={styles.footerRowsContainer}>{props.children}</div>
      </BoundedRow>
    </div>
  );
}
export default Footer;
