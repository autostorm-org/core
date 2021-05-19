import React from "react";
import { IAsyncValue } from "../types";

/**
 * @param promise The promise that will be resolved to an async value
 * @param dependencies The array of dependencies that will determine is the promise needs to be re-evaluated
 * @param debug Debugging tag to troubleshoot if required
 * @returns An object of chape { value, error } where value is the last evaluated value of the promise. Error any error messages.
 */
const useAsyncValue = <T>(
  promise?: () => Promise<T> | void,
  dependencies?: Array<unknown>,
  debug?: string
): IAsyncValue<T> => {
  // Keep state of the value and initialize to null
  const [value, setValue] = React.useState<T | null>(null);
  // Keep state of the errors and initialize to null
  const [error, setError] = React.useState<unknown>(null);
  // Keep state whether a promise has been evaluated or not. Useful for void promises
  const [evaluated, setEvaluated] = React.useState(false);
  // Nonce to prevent multiple renders
  const nonce = React.useRef(Symbol());

  React.useEffect(
    () => {
      const currentNonce = (nonce.current = Symbol());

      // if promise is not null we execute the promise function
      if (promise != null) {
        // Check if the function returns a promise, this simplifies syntax as some promises
        // are not readily available
        const promiseValue = promise();
        if (promiseValue != null) {
          // If the value is indeed a promise, then evaluate and set states accordingly
          Promise.resolve(promiseValue)
            .then((value) => {
              if (debug != null) {
                console.log(`useAsyncValue | ${debug} | setValue ${value}`);
              }
              if (nonce.current == currentNonce) {
                setValue(value);
              }
            })
            .catch((e) => {
              if (debug != null) {
                console.log(`setError | ${debug} | setValue ${e}`);
              }
              if (nonce.current == currentNonce) {
                setError(e);
              }
            })
            .finally(() => {
              if (!evaluated) {
                setEvaluated(true);
              }
            });
        }
      }
      if (debug != null && dependencies == null) {
        console.log(
          `useAsyncValue | ${debug} | Will not update value with empty dependencies`
        );
      }
      return () => {
        nonce.current = Symbol();
      };
    }, // Make the dependencies empty array by default to avoid infinite loops
    dependencies ?? []
  );

  return { value, error, evaluated };
};

export { useAsyncValue };
