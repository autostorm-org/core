import React from "react";
import type { IFocusable, IChangeable, IClickable } from "../../types";

enum EnumAutoCompleteStates {
  OFF,
  SELECTING,
  SELECTED,
}

interface IAutoCompleteOption<V>
  extends IFocusable<V>,
    IChangeable<V>,
    IClickable<V> {
  label: string;
  value: string;
  icon?: React.JSXElementConstructor<{}>;
}
export { EnumAutoCompleteStates };
export type { IAutoCompleteOption };
