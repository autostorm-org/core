import { useLendingPool } from "../contracts/useLendingPool";
import type { IMultiplierWritableMethod } from "../types";

type HookValueType = NonNullable<
  ReturnType<typeof useLendingPool>["contract"]
>["swapBorrowRateMode"];

interface IUseSwapBorrowRateModeHook
  extends IMultiplierWritableMethod<HookValueType> {}

const useSwapBorrowRateMode = (): IUseSwapBorrowRateModeHook => {
  const lp = useLendingPool(true);
  const swapBorrowRateMode = lp.contract?.swapBorrowRateMode;

  if (!swapBorrowRateMode) {
    return {
      method: null,
      connected: lp.connected,
      connecting: lp.connecting,
      account: lp.account,
    };
  }

  return {
    method: swapBorrowRateMode,
    connected: lp.connected,
    connecting: lp.connecting,
    account: lp.account,
  };
};

export default useSwapBorrowRateMode;
