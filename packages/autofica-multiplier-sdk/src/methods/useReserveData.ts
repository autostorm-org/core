import { useAsyncValue } from "../utilities/useAsyncValue";
import { useLendingPool } from "../contracts/useLendingPool";
import type { IMultiplerViewMethod, Await } from "../types";

type HookValueType = Await<
  ReturnType<
    NonNullable<ReturnType<typeof useLendingPool>["contract"]>["getReserveData"]
  >
>;

interface IUserAccountHook extends IMultiplerViewMethod<HookValueType> {}

const useReserveData = (reserve: string): IUserAccountHook => {
  const lp = useLendingPool();
  const reserveData = useAsyncValue(() => {
    return lp.contract?.getReserveData(reserve);
  }, [lp.account, lp.contract == null]);

  return {
    value: reserveData.value,
    error: reserveData.error,
    evaluated: reserveData.evaluated,
    connected: lp.connected,
    connecting: lp.connecting,
    account: lp.account,
  };
};

export default useReserveData;
