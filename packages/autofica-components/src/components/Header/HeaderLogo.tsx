import React from "react";
import { HeaderLocations } from "./constants";
import styles from "./HeaderLogo.module.scss";
import type { WithOverrides } from "../../types";

type HeaderLogoProps = WithOverrides<{
  logoPath: string;
  alt: string;
  width?: string;
  height?: string;
  itemLocation: HeaderLocations;
}>;

function HeaderLogo(props: HeaderLogoProps) {
  const rightMarginClass =
    props.itemLocation == HeaderLocations.left ||
    props.itemLocation == HeaderLocations.center
      ? styles.leftOrCenterItem
      : styles.rightItem;
  const leftMarginClass =
    props.itemLocation == HeaderLocations.right ||
    props.itemLocation == HeaderLocations.center
      ? styles.rightOrCenterItem
      : styles.leftItem;

  const overrideClass = props.override || "";

  return (
    <li
      className={`${styles.root} ${rightMarginClass} ${leftMarginClass}  ${overrideClass}`}
      style={props.style}
    >
      <a href="/" role="menuitem">
        <img
          src={props.logoPath}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
      </a>
    </li>
  );
}

export default HeaderLogo;
export type { HeaderLogoProps };
