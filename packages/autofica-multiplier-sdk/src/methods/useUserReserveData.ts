import { useAsyncValue } from "../utilities/useAsyncValue";
import { useLendingPool } from "../contracts/useLendingPool";
import type { IMultiplerViewMethod, Await } from "../types";

type HookValueType = Await<
  ReturnType<
    NonNullable<
      ReturnType<typeof useLendingPool>["contract"]
    >["getUserReserveData"]
  >
>;

interface IUserAccountHook extends IMultiplerViewMethod<HookValueType> {}

const useUserReserveData = (reserve: string): IUserAccountHook => {
  const lp = useLendingPool();
  const userReserveData = useAsyncValue(() => {
    return lp.contract?.getUserReserveData(reserve, lp.account ?? "");
  }, [lp.account, lp.contract == null]);

  return {
    value: userReserveData.value,
    error: userReserveData.error,
    evaluated: userReserveData.evaluated,
    connected: lp.connected,
    connecting: lp.connecting,
    account: lp.account,
  };
};

export default useUserReserveData;
