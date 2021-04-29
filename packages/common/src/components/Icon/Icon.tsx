import React from "react";
import { IAriaHidden, IOverridable, IStylable } from "../../types";

interface IconProps extends IAriaHidden, IOverridable, IStylable {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const Icon = (props: IconProps) => {
  return (
    <img
      aria-hidden={props["aria-hidden"]}
      style={props.style}
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
