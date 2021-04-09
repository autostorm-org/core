import React from "react";
import withStyles from "react-jss";
export type WithStyleOverride<T> = T & {
  style?: React.CSSProperties;
};
export type WithChildren<T> = T & {
  children?: React.ReactNode;
};

export type WithClassOverride<T> = T & {
  override?: string;
};

export type withOverrides<T> = WithStyleOverride<WithClassOverride<T>>;

export type Theme = { name: string; values: { [key: string]: string } };
