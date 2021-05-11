import React from "react";
import type { ethers } from "ethers";
import { WalletConnectionStates } from "../constants";
interface IMultiplierContext {
  /**
   * EthersProvider value will be initalized by multiplier sdk
   */
  readonly ethersProvider: ethers.providers.Provider | null;
  /**
   * Status of wallet detection/conection
   */
  readonly wallectConnectionState: WalletConnectionStates;
}

const initialValue: IMultiplierContext = {
  ethersProvider: null,
  wallectConnectionState: WalletConnectionStates.NOT_CONNECTED,
};
/**
 * React context for Multiplier
 */
const MultiplierContext = React.createContext(initialValue);

export default MultiplierContext;

export type { IMultiplierContext };
