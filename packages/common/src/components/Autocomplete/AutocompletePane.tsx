import React from "react";
import type { IAutoCompleteOption } from "./Autocomplete.types";
import type { IIdentifiable, IAriaLabel } from "../../types";
import styles from "./AutocompletePane.module.scss";
import { ProgressPlugin } from "webpack";

interface AutocompletePaneProps extends IIdentifiable, IAriaLabel {
  options: Array<IAutoCompleteOption<HTMLLIElement>>;
  onSelection?: (e: IAutoCompleteOption<HTMLLIElement>) => void;
  textBuffer?: string;
  focusedIndex?: number;
}

const AutocompletePane = (props: AutocompletePaneProps) => {
  const refs = props.options.map((value, i) => {
    return React.createRef<HTMLLIElement>();
  });

  React.useLayoutEffect(() => {
    if (props.focusedIndex != null && props.focusedIndex > -1) {
      if (refs[props.focusedIndex] != null) {
        refs[props.focusedIndex].current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }

    return () => {
      if (refs.length > -1 && refs[0] && refs[0].current) {
        refs[0].current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };
  }, [props]);
  return (
    <ul
      className={styles.root}
      id={props.id}
      role={"listbox"}
      tabIndex={-1}
      aria-label={`${props.options.length} combobox options available`}
    >
      {props.options.map((option, i) => {
        return (
          <li
            id={`${option.label} - ${option.value}`}
            role={"option"}
            ref={refs[i]}
            aria-selected={props.focusedIndex == i ? "true" : "false"}
            key={`key ${i} ${option.label}`}
            className={`${styles.listElement} ${
              props.focusedIndex == i ? styles.listElementFocused : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              if (option.onClick != null) {
                option.onClick(e);
              }

              if (props.onSelection != null) {
                props.onSelection(option);
              }
            }}
          >
            {option.icon && <option.icon />}
            <span className={styles.listElementWrapper}>{option.label}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default AutocompletePane;
export type { AutocompletePaneProps };
