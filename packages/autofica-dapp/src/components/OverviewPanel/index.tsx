import { DashboardBase } from "../DashboardBase";
import {
  useAsyncValue,
  useLendingPoolAddressProvider,
  useUserAccountData,
  useReserves,
} from "@autofica/multiplier-sdk";

const OverviewPanel = () => {
  const reserves = useReserves();
  const reservesValue = reserves.value ?? [];
  const lendingPoolAddressProviderContract = useLendingPoolAddressProvider();
  const lendingPoolAddress = useAsyncValue(() => {
    return lendingPoolAddressProviderContract.contract?.getLendingPool();
  }, [
    lendingPoolAddressProviderContract.account,
    lendingPoolAddressProviderContract.connected,
    lendingPoolAddressProviderContract.contract != null,
  ]);
  const accountData = useUserAccountData();

  return (
    <DashboardBase>
      Reserves are:
      <div>
        <code>{JSON.stringify(accountData.value)}</code>
      </div>
      <br />
      <div>
        <code>{JSON.stringify(reserves.value)}</code>
      </div>
    </DashboardBase>
  );
};
export default OverviewPanel;
