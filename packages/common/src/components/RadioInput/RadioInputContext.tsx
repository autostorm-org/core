import React from "react";
interface IRadioContext {
  value: string;
  setValue: (_value: string) => void;
  name: string;
}

const radioContextInitialValue: IRadioContext = {
  value: "",
  setValue: (_value: string) => {},
  name: "Radio group",
};

const RadioContext = React.createContext<IRadioContext>(
  radioContextInitialValue
);

interface IRadioGroupProviderProps {
  name: string;
  initialValue: string;
  onValueChange?: (nextValue: string) => void;
}

const useValueChangeHandler = (
  setValue: React.Dispatch<React.SetStateAction<string>>,
  onChange?: (nextValue: string) => void
) => {
  return React.useCallback(
    (value: string) => {
      setValue(value);
      if (onChange != null) {
        onChange(value);
      }
    },
    [setValue, onChange]
  );
};

const RadioGroupProvider = (
  props: React.PropsWithChildren<IRadioGroupProviderProps>
) => {
  const [value, setValue] = React.useState(props.initialValue);
  const onValueChange = useValueChangeHandler(setValue, props.onValueChange);
  return (
    <RadioContext.Provider
      value={{ value, setValue: onValueChange, name: props.name }}
    >
      {props.children}
    </RadioContext.Provider>
  );
};

export default RadioGroupProvider;
export { RadioContext, radioContextInitialValue };
export type { IRadioGroupProviderProps, IRadioContext };
