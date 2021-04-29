import React from "react";
import { ChevronDown } from "react-feather";
import AutocompletePane from "./AutocompletePane";
import { Input } from "../Input";
import { EnumAutoCompleteStates } from "./Autocomplete.types";
import type {
  IAutoCompleteOption,
  AutocompleteContextValue,
} from "./AutocompleteContext";
import type { IFocusable, IChangeable, IAriaLabel, Maybe } from "../../types";
import styles from "./Autocomplete.module.scss";

interface AutocompleteProps
  extends IFocusable<HTMLInputElement>,
    IChangeable<HTMLInputElement>,
    IAriaLabel {
  options: Array<IAutoCompleteOption<HTMLElement>>;
  selectedOption: Maybe<IAutoCompleteOption<HTMLElement>>;
  onSelection?: (option: Maybe<IAutoCompleteOption<HTMLElement>>) => void;
  id: string;
}

const filterOptions = (
  allOptions: Array<IAutoCompleteOption<HTMLElement>>,
  bufferText: string
): Array<IAutoCompleteOption<HTMLElement>> => {
  return allOptions.filter((option) => {
    return option.label.toLocaleLowerCase().includes(bufferText.toLowerCase());
  });
};

const Autocomplete = (props: AutocompleteProps) => {
  const [state, setState] = React.useState<
    AutocompleteContextValue<HTMLElement>
  >({
    focusState: EnumAutoCompleteStates.OFF,
    selectedOption: props.selectedOption,
  });

  const onInputFocus = React.useCallback(
    (e): void => {
      console.log("FOCUSED");
      if (state.focusState == EnumAutoCompleteStates.OFF) {
        setState({
          focusState: EnumAutoCompleteStates.SELECTING,
          selectedOption: state.selectedOption,
        });
      }

      if (state.focusState == EnumAutoCompleteStates.SELECTED) {
        setState({
          focusState: EnumAutoCompleteStates.SELECTING,
          selectedOption: state.selectedOption,
        });
      }

      e.target.select();
    },
    [state]
  );

  const rootNode = React.useRef<HTMLDivElement | null>(null);
  const inputNode = React.useRef<HTMLLabelElement | null>(null);
  const [focusedIndex, setFocusedIndex] = React.useState<number>(-1);
  const [textBuffer, setTextBuffer] = React.useState<string>("");
  const onSelection = (option: IAutoCompleteOption<HTMLElement>) => {
    setState({
      focusState: EnumAutoCompleteStates.SELECTED,
      selectedOption: option,
    });
    setTextBuffer(option?.label || "");
    setFocusedIndex(-1);
  };
  const filteredOptions = React.useMemo(
    () => filterOptions(props.options, textBuffer),
    [props.options, textBuffer]
  );
  React.useLayoutEffect(() => {
    const inputKeyPressListener = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Down": // IE/Edge specific value
        case "ArrowDown":
          // Do something for "down arrow" key press.
          if (state.focusState == EnumAutoCompleteStates.SELECTING) {
            e.preventDefault();

            if (focusedIndex == filteredOptions.length - 1) {
              setFocusedIndex(-1);
            } else {
              setFocusedIndex(
                Math.min(focusedIndex + 1, filteredOptions.length - 1)
              );
            }
          }

          break;
        case "Up": // IE/Edge specific value
        case "ArrowUp":
          // Do something for "up arrow" key press.
          if (state.focusState == EnumAutoCompleteStates.SELECTING) {
            e.preventDefault();

            if (focusedIndex == -1) {
              setFocusedIndex(filteredOptions.length - 1);
            } else {
              setFocusedIndex(Math.max(focusedIndex - 1, -1));
            }
          }
          break;

        case "Enter":
          // Do something for "enter" or "return" key press.
          if (focusedIndex > -1) {
            onSelection(filteredOptions[focusedIndex]);
          }
          break;
        case "Esc": // IE/Edge specific value
        case "Tab": // IE/Edge specific value
        case "Escape":
          if (state.selectedOption == null) {
            setState({
              focusState: EnumAutoCompleteStates.OFF,
              selectedOption: state.selectedOption,
            });
            setFocusedIndex(-1);
          }

          if (state.selectedOption != null) {
            setState({
              focusState: EnumAutoCompleteStates.SELECTED,
              selectedOption: state.selectedOption,
            });
            setFocusedIndex(-1);
          }

          break;
        default:
          return; // Quit when this doesn't handle the key event.
      }
    };
    inputNode.current?.addEventListener("keydown", inputKeyPressListener);

    return () => {
      inputNode.current?.removeEventListener("keydown", inputKeyPressListener);
    };
  }, [state, focusedIndex, filteredOptions]);
  React.useLayoutEffect(() => {
    const documentClickHandler = (e: MouseEvent): void => {
      const root = rootNode.current;
      // type assertion is inevitable as  EventTarget is the most generic type
      const target = e.target as Node | null;
      if (e.target == null || root == null) {
        return;
      }
      if (root.contains(target) == false) {
        if (state.focusState == EnumAutoCompleteStates.SELECTING) {
          setState({
            focusState:
              state.selectedOption == null
                ? EnumAutoCompleteStates.OFF
                : EnumAutoCompleteStates.SELECTED,
            selectedOption: state.selectedOption,
          });
        }

        if (state.focusState == EnumAutoCompleteStates.SELECTED) {
          setState({
            focusState: EnumAutoCompleteStates.SELECTED,
            selectedOption: state.selectedOption,
          });
        }
      }
      setFocusedIndex(-1);
    };

    document.addEventListener("click", documentClickHandler, false);
    return () => {
      document.removeEventListener("click", documentClickHandler);
    };
  }, [rootNode.current, state.selectedOption, state.focusState, focusedIndex]);
  React.useEffect(() => {
    if (props.onSelection) {
      props.onSelection(state.selectedOption);
    }
  }, [state.selectedOption]);
  return (
    <div className={styles.root} ref={rootNode}>
      <Input
        type="text"
        id={props.id}
        iconLeft={state.selectedOption?.icon}
        iconRight={ChevronDown}
        override={styles.inputOverride}
        onFocusCapture={onInputFocus}
        onChange={(e) => {
          if (e.target.value != state.selectedOption?.label) {
            setState({
              selectedOption: null,
              focusState: EnumAutoCompleteStates.SELECTING,
            });
          }
          setTextBuffer(e.target.value);
          setFocusedIndex(-1);
        }}
        autocomplete={"off"}
        ref={inputNode}
        value={textBuffer}
        role={"combobox"}
        aria-autocomplete="list"
        aria-haspopup="true"
        aria-expanded={
          state.focusState == EnumAutoCompleteStates.SELECTING
            ? "true"
            : "false"
        }
        aria-owns={`${props.id}-pane`}
        aria-activedescendant={
          filteredOptions[focusedIndex]
            ? `${filteredOptions[focusedIndex].label} - ${filteredOptions[focusedIndex].value}`
            : undefined
        }
        aria-label={props["aria-label"]}
      />
      <div
        className={`${styles.paneContainer} ${styles.paneWrapper} ${
          state.focusState == EnumAutoCompleteStates.SELECTING
            ? styles.paneExpanded
            : styles.paneCollapsed
        }`}
      >
        <AutocompletePane
          options={state.selectedOption == null ? filteredOptions : []}
          textBuffer={textBuffer}
          onSelection={onSelection}
          focusedIndex={focusedIndex}
          id={`${props.id}-pane`}
          aria-label={props["aria-label"]}
        />
      </div>
    </div>
  );
};
export default Autocomplete;
export type { AutocompleteProps };
