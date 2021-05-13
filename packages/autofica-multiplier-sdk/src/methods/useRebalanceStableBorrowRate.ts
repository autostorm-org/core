import { useLendingPool } from "../contracts/useLendingPool";
import type { IMultiplierWritableMethod } from "../types";

type HookValueType = NonNullable<
  ReturnType<typeof useLendingPool>["contract"]
>["rebalanceStableBorrowRate"];

interface IUseRebalanceStableBorrowRateHook
  extends IMultiplierWritableMethod<HookValueType> {}

const useRebalanceStableBorrowRate = (): IUseRebalanceStableBorrowRateHook => {
  const lp = useLendingPool(true);
  const rebalanceStableBorrowRate = lp.contract?.rebalanceStableBorrowRate;

  if (!rebalanceStableBorrowRate) {
    return {
      method: null,
      connected: lp.connected,
      connecting: lp.connecting,
      account: lp.account,
    };
  }

  return {
    method: rebalanceStableBorrowRate,
    connected: lp.connected,
    connecting: lp.connecting,
    account: lp.account,
  };
};

export default useRebalanceStableBorrowRate;
