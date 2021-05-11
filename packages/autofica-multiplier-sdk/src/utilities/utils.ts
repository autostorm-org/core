import React from "react";
import { SupportedNetworks } from "../constants";
const parseChainId = (chainId: number | null): SupportedNetworks => {
  return chainId == SupportedNetworks.MAINNET
    ? SupportedNetworks.MAINNET
    : SupportedNetworks.TESTNET;
};

const usePrevious = <T extends unknown>(value: T) => {
  // Initialize a ref to null
  const ref = React.useRef<T | null>(null);
  React.useEffect(
    () => {
      ref.current = value;
    }, // Update when value changes, should be shallow
    [value]
  );
  // Return the previous value
  return ref.current;
};

export { parseChainId, usePrevious };
