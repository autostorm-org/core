import { useLendingPool } from "../contracts/useLendingPool";
import type { IMultiplierWritableMethod } from "../types";

type HookValueType = NonNullable<
  ReturnType<typeof useLendingPool>["contract"]
>["deposit"];

interface IUseDepositHook extends IMultiplierWritableMethod<HookValueType> {}

const useDeposit = (): IUseDepositHook => {
  const lp = useLendingPool(true);
  const deposit = lp.contract?.deposit;

  if (!deposit) {
    return {
      method: null,
      connected: lp.connected,
      connecting: lp.connecting,
      account: lp.account,
    };
  }

  return {
    method: deposit,
    connected: lp.connected,
    connecting: lp.connecting,
    account: lp.account,
  };
};

export default useDeposit;
