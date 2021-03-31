import React from "react";

type IconProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

function Icon(props: IconProps) {
  return (
    <img
      src={props.src}
      width={props.width}
      height={props.height}
      alt={props.alt}
    />
  );
}
export default Icon;
