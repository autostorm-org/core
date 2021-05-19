import { SupportedNetworks } from "../constants";
const parseChainId = (chainId: number | null): SupportedNetworks => {
  return chainId == SupportedNetworks.MAINNET
    ? SupportedNetworks.MAINNET
    : SupportedNetworks.TESTNET;
};

export { parseChainId };
