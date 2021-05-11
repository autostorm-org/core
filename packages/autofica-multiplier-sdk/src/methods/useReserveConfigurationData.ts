import { useAsyncValue } from "../utilities/useAsyncValue";
import { useLendingPool } from "../contracts/useLendingPool";
import type { IMultiplerViewMethod, Await } from "../types";

type HookValueType = Await<
  ReturnType<
    NonNullable<
      ReturnType<typeof useLendingPool>["contract"]
    >["getReserveConfigurationData"]
  >
>;

interface IUserAccountHook extends IMultiplerViewMethod<HookValueType> {}

const useReserveConfigurationData = (reserve: string): IUserAccountHook => {
  const lp = useLendingPool();
  const reserveConfigurationData = useAsyncValue(() => {
    return lp.contract?.getReserveConfigurationData(reserve);
  }, [lp.account, lp.contract == null]);

  return {
    value: reserveConfigurationData.value,
    error: reserveConfigurationData.error,
    evaluated: reserveConfigurationData.evaluated,
    connected: lp.connected,
    connecting: lp.connecting,
    account: lp.account,
  };
};

export default useReserveConfigurationData;
