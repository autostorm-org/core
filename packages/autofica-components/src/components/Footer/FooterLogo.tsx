import React from "react";
import type { WithOverrides } from "../../types";
import styles from "./FooterLogo.module.scss";

type FooterLogoProps = WithOverrides<{
  logoPath: string;
  alt: string;
  width?: string;
  height?: string;
}>;

function FooterLogo(props: FooterLogoProps) {
  const overrideClass = props.override || "";

  return (
    <div className={`${styles.root} ${overrideClass}`}>
      <a href="/">
        <img
          src={props.logoPath}
          alt={props.alt}
          width={props.width}
          height={props.height}
          className={styles.img}
        />
      </a>
    </div>
  );
}

export default FooterLogo;
export type { FooterLogoProps };
