import { createLocalComponentContext } from "../LocalComponentContext";
import { EnumAutoCompleteStates } from "./Autocomplete.types";
import type { Maybe } from "../../types";
import type { IAutoCompleteOption } from "./Autocomplete.types";

interface AutocompleteContextValue<V> {
  focusState: EnumAutoCompleteStates;
  selectedOption: Maybe<IAutoCompleteOption<V>>;
}

const AutocompleteContext = createLocalComponentContext<
  AutocompleteContextValue<HTMLElement>
>({
  value: {
    focusState: EnumAutoCompleteStates.OFF,
    selectedOption: null,
  },
  setValue: () => {},
});

export { AutocompleteContext };
export type { IAutoCompleteOption, AutocompleteContextValue };
