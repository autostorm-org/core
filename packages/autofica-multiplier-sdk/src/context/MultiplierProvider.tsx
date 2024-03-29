import React from "react";
import { UseWalletProvider } from "@binance-chain/bsc-use-wallet";
import { SupportedNetworks } from "../constants";

interface IMultiplierProviderProps {
  chainId: SupportedNetworks;
}
const MultiplierProvider = (
  props: React.PropsWithChildren<IMultiplierProviderProps>
) => {
  return (
    // @ts-ignore
    <UseWalletProvider chainId={props.chainId}>
      {props.children}
    </UseWalletProvider>
  );
};

export { MultiplierProvider };
export type { IMultiplierProviderProps };
