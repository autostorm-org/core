import React from "react";
export type WithStyleOverride<T> = T & {
  override?: React.CSSProperties;
};
