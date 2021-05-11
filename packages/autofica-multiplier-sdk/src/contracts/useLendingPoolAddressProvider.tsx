import { LendingPoolAddressesProvider__factory } from "@autofica/abi";
// import { utils, ethers } from "ethers";
import useWallet from "../utilities/useWallet";
import { Contracts } from "../constants";
import { parseChainId } from "../utilities/utils";
import type { IMultiplierContract } from "../types";

interface ILendingPoolAddressProvider
  extends IMultiplierContract<
    ReturnType<typeof LendingPoolAddressesProvider__factory.connect>
  > {}

const useLendingPoolAddressProvider = (): ILendingPoolAddressProvider => {
  const wallet = useWallet();
  const chainId = parseChainId(wallet.chainId);

  if (wallet.provider == null || wallet.chainId == null) {
    return {
      connected: wallet.connected,
      connecting: wallet.connecting,
      account: wallet.account,
    };
  }

  return {
    contract: LendingPoolAddressesProvider__factory.connect(
      Contracts[chainId].lendingPoolAddressProvider,
      wallet.provider
    ),
    connected: wallet.connected,
    connecting: wallet.connecting,
    account: wallet.account,
  };
};

export { useLendingPoolAddressProvider };
export type { ILendingPoolAddressProvider };
