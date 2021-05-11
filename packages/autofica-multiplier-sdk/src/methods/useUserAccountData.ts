import { useAsyncValue } from "../utilities/useAsyncValue";
import { useLendingPool } from "../contracts/useLendingPool";
import type { IMultiplerViewMethod, Await } from "../types";

type HookValueType = Await<
  ReturnType<
    NonNullable<
      ReturnType<typeof useLendingPool>["contract"]
    >["getUserAccountData"]
  >
>;

interface IUserAccountHook extends IMultiplerViewMethod<HookValueType> {}

const useUserAccountData = (): IUserAccountHook => {
  const lp = useLendingPool();
  const userAccountData = useAsyncValue(() => {
    return lp.contract?.getUserAccountData(lp.account ?? "");
  }, [lp.account, lp.contract == null]);

  return {
    value: userAccountData.value,
    error: userAccountData.error,
    evaluated: userAccountData.evaluated,
    connected: lp.connected,
    connecting: lp.connecting,
    account: lp.account,
  };
};

export default useUserAccountData;
