import React from "react";
import { WithClassOverride } from "../../types";

type IconProps = WithClassOverride<{
  src: string;
  width: number;
  height: number;
  alt: string;
}>;

const Icon = (props: IconProps) => {
  return (
    <img
      src={props.src}
      width={props.width}
      height={props.height}
      alt={props.alt}
      className={`${props.override || ""}`}
    />
  );
};
export default Icon;
export type { IconProps };
