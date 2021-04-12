import React from "react";
export type WithStyleOverride<T> = T & {
  style?: React.CSSProperties;
};
export type WithChildren<T> = T & {
  children?: React.ReactNode;
};

export type WithClassOverride<T> = T & {
  override?: string;
};

export type WithOverrides<T> = WithStyleOverride<WithClassOverride<T>>;

export type Theme = { name: string; values: { [key: string]: string } };
