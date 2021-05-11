import { useLendingPool } from "../contracts/useLendingPool";
import { useAsyncValue } from "../utilities/useAsyncValue";

import type { IMultiplerViewMethod, Await } from "../types";

type HookValueType = Await<
  ReturnType<
    NonNullable<ReturnType<typeof useLendingPool>["contract"]>["getReserves"]
  >
>;

interface IReservesHook extends IMultiplerViewMethod<HookValueType> {}

const useReserves = (): IReservesHook => {
  const lp = useLendingPool();
  const reserves = useAsyncValue(() => {
    return lp.contract?.getReserves();
  }, [lp.account, lp.contract == null]);
  return {
    value: reserves.value,
    error: reserves.error,
    evaluated: reserves.evaluated,
    connected: lp.connected,
    connecting: lp.connecting,
    account: lp.account,
  };
};

export default useReserves;
