import React from "react";
import type { ILocalComponentContext } from "./types";

const createLocalComponentContext = <V,>(
  initialValue: ILocalComponentContext<V>
) => {
  return React.createContext(initialValue);
};

export default createLocalComponentContext;
