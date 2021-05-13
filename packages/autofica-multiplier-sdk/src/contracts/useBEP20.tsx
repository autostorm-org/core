import { BEP20__factory } from "@autofica/abi";
import useWallet from "../utilities/useWallet";
import type { IMultiplierContract } from "../types";

interface IBEP20Contract
  extends IMultiplierContract<ReturnType<typeof BEP20__factory.connect>> {}

const useBEP20Contract = (
  address?: string,
  writable?: boolean
): IBEP20Contract => {
  const wallet = useWallet();

  if (wallet.provider == null || address == null) {
    return {
      connected: wallet.connected,
      connecting: wallet.connecting,
      account: wallet.account,
    };
  }

  return {
    contract: BEP20__factory.connect(
      address,
      writable ? wallet.provider.getSigner() : wallet.provider
    ),
    connected: wallet.connected,
    connecting: wallet.connecting,
    account: wallet.account,
  };
};

export { useBEP20Contract };
export type { IBEP20Contract };
