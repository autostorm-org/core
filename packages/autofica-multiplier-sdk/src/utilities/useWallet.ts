import React from "react";
import { providers } from "ethers";
import { useWallet as useBscWallet } from "@binance-chain/bsc-use-wallet";
import { ChainData } from "../constants";
import { parseChainId } from "./utils";

export default function useWallet() {
  const wallet = useBscWallet<providers.ExternalProvider>();

  const { connecting, connected } = React.useMemo(
    () => ({
      connecting: wallet.status === "connecting",
      connected: wallet.status === "connected",
    }),
    [wallet.status]
  );
  const chainId = parseChainId(wallet.chainId);
  const SelectedChainData = ChainData[chainId];

  const provider = React.useMemo(
    () =>
      wallet.ethereum && wallet.chainId
        ? new providers.Web3Provider(wallet.ethereum, {
            name: SelectedChainData.name,
            chainId: wallet.chainId,
          })
        : null,
    [wallet.ethereum, wallet.chainId]
  );

  React.useEffect(() => {
    // connect errors
    if (wallet.error) {
      let errorMsg = "Failed to connect wallet";
      switch (wallet.error.name) {
        case "ChainUnsupportedError":
          errorMsg = "Chain Unsupported Error";
          break;
        case "ConnectorUnsupportedError":
          errorMsg = "Connector Unsupported Error";
          break;
        case "ConnectionRejectedError":
          errorMsg = "Connection Rejected Error";
          break;
        case "ConnectorConfigError":
          errorMsg = "Connector Config Error";
          break;
        default:
          if (wallet.error?.message) {
            errorMsg = wallet.error.message;
            if (errorMsg.indexOf("Invariant failed") > -1) {
              errorMsg = "Please switch wallet network to Binance Smart Chain";
            }
          }
          break;
      }
    }
  }, [wallet.error]);

  return {
    ...wallet,
    connecting,
    connected,
    provider,
  };
}
