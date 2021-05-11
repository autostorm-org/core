import { LendingPool__factory } from "@autofica/abi";
// import { utils, ethers } from "ethers";
import useWallet from "../utilities/useWallet";
import { useAsyncValue } from "../utilities/useAsyncValue";
import { useLendingPoolAddressProvider } from "./useLendingPoolAddressProvider";
import type { IMultiplierContract } from "../types";

interface IUseLendingPool
  extends IMultiplierContract<ReturnType<typeof LendingPool__factory.connect>> {
  readonly contract?: ReturnType<typeof LendingPool__factory.connect>;
  readonly connected: boolean;
  readonly connecting: boolean;
}

const useLendingPool = (): IUseLendingPool => {
  const wallet = useWallet();
  const lendingPoolAddressProviderContract = useLendingPoolAddressProvider();
  const lendingPoolAddressProviderResult = useAsyncValue(() => {
    return lendingPoolAddressProviderContract.contract?.getLendingPool();
  }, [wallet.account, lendingPoolAddressProviderContract.contract != null]);

  if (
    wallet.provider == null ||
    lendingPoolAddressProviderResult.value == null
  ) {
    return {
      connected: wallet.connected,
      connecting: wallet.connecting,
      account: wallet.account,
    };
  }
  return {
    contract: LendingPool__factory.connect(
      lendingPoolAddressProviderResult.value,
      wallet.provider
    ),
    connected: wallet.connected,
    connecting: wallet.connecting,
    account: wallet.account,
  };
};

export { useLendingPool };
export type { IUseLendingPool };
