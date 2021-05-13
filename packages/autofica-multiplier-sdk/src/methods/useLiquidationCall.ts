import { useLendingPool } from "../contracts/useLendingPool";
import type { IMultiplierWritableMethod } from "../types";

type HookValueType = NonNullable<
  ReturnType<typeof useLendingPool>["contract"]
>["liquidationCall"];

interface IUseLiquidationCallHook
  extends IMultiplierWritableMethod<HookValueType> {}

const useLiquidationCall = (): IUseLiquidationCallHook => {
  const lp = useLendingPool(true);
  const liquidationCall = lp.contract?.liquidationCall;

  if (!liquidationCall) {
    return {
      method: null,
      connected: lp.connected,
      connecting: lp.connecting,
      account: lp.account,
    };
  }

  return {
    method: liquidationCall,
    connected: lp.connected,
    connecting: lp.connecting,
    account: lp.account,
  };
};

export default useLiquidationCall;
