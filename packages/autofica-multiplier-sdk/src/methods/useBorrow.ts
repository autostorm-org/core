import { useLendingPool } from "../contracts/useLendingPool";
import type { IMultiplierWritableMethod } from "../types";

type HookValueType = NonNullable<
  ReturnType<typeof useLendingPool>["contract"]
>["borrow"];

interface IUseBorrowHook extends IMultiplierWritableMethod<HookValueType> {}

const useBorrow = (): IUseBorrowHook => {
  const lp = useLendingPool(true);
  const borrow = lp.contract?.borrow;

  if (!borrow) {
    return {
      method: null,
      connected: lp.connected,
      connecting: lp.connecting,
      account: lp.account,
    };
  }

  return {
    method: borrow,
    connected: lp.connected,
    connecting: lp.connecting,
    account: lp.account,
  };
};

export default useBorrow;
