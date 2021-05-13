import { useLendingPool } from "../contracts/useLendingPool";
import type { IMultiplierWritableMethod } from "../types";

type HookValueType = NonNullable<
  ReturnType<typeof useLendingPool>["contract"]
>["repay"];

interface IUseRepayHook extends IMultiplierWritableMethod<HookValueType> {}

const useRepay = (): IUseRepayHook => {
  const lp = useLendingPool(true);
  const repay = lp.contract?.repay;

  if (!repay) {
    return {
      method: null,
      connected: lp.connected,
      connecting: lp.connecting,
      account: lp.account,
    };
  }

  return {
    method: repay,
    connected: lp.connected,
    connecting: lp.connecting,
    account: lp.account,
  };
};

export default useRepay;
