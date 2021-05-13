import { useLendingPool } from "../contracts/useLendingPool";
import type { IMultiplierWritableMethod } from "../types";

type HookValueType = NonNullable<
  ReturnType<typeof useLendingPool>["contract"]
>["setUserUseReserveAsCollateral"];

interface IUseSetUserUseReserveAsCollateralHook
  extends IMultiplierWritableMethod<HookValueType> {}

const useSetUserUseReserveAsCollateral = (): IUseSetUserUseReserveAsCollateralHook => {
  const lp = useLendingPool(true);
  const setUserUseReserveAsCollateral =
    lp.contract?.setUserUseReserveAsCollateral;

  if (!setUserUseReserveAsCollateral) {
    return {
      method: null,
      connected: lp.connected,
      connecting: lp.connecting,
      account: lp.account,
    };
  }

  return {
    method: setUserUseReserveAsCollateral,
    connected: lp.connected,
    connecting: lp.connecting,
    account: lp.account,
  };
};

export default useSetUserUseReserveAsCollateral;
