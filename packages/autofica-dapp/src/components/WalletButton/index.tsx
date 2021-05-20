import React from "react";
import {
  MultiplierProvider,
  useWallet,
  useLendingPoolAddressProvider,
  SupportedNetworks,
  useLendingPool,
  useAsyncValue,
  useReserves,
  useUserAccountData,
  useBEP20Contract,
} from "@autofica/multiplier-sdk";
import {
  StaticThemeProvider,
  useStaticThemeContext,
  HeaderResponsive,
  DashboardTemplate,
  Typography,
  TypographyVariant_ENUM,
  DashboardOptionsColumn,
  DashboardOptionsItem,
  PillButton,
  Icon,
} from "@autofica/components";
import { AlertTriangle } from "react-feather";
import styles from "./WalletButton.module.scss";

enum WalletButtonStates {
  NOT_CONNECTED,
  BSC,
  METAMASK,
}

const getWalletState = (
  wallet: ReturnType<typeof useWallet>
): WalletButtonStates => {
  if (wallet == null || !wallet.connected) {
    return WalletButtonStates.NOT_CONNECTED;
  }

  if (wallet.ethereum?.isMetaMask) {
    return WalletButtonStates.METAMASK;
  }
  console.log(wallet);
  if (wallet.connector == "bsc") {
    return WalletButtonStates.BSC;
  }
  console.log(wallet);
  return WalletButtonStates.NOT_CONNECTED;
};

const WalletButton = () => {
  const wallet = useWallet();
  const [state, setState] = React.useState(getWalletState(wallet));
  const onClick = React.useCallback(() => {
    wallet.connect("bsc");
  }, [state]);
  React.useEffect(() => {
    // Refresh wallet if connection state changes
    setState(getWalletState(wallet));
  }, [wallet.connected]);
  return (
    <PillButton override={styles.buttonOverride} onClick={onClick}>
      {state == WalletButtonStates.NOT_CONNECTED ? (
        <>
          <AlertTriangle
            height={22}
            width={22}
            className={styles.walletButtonIcon}
          />

          <span className={styles.walletText}>Not connected</span>
        </>
      ) : state == WalletButtonStates.BSC ? (
        <>
          <Icon
            src={"/crypto-logos/bsc.svg"}
            height={22}
            width={22}
            override={styles.walletButtonIcon}
            alt={"Binance chain wallet logo"}
          />

          <span className={styles.walletText}>BSC Mainnet</span>
        </>
      ) : (
        <>
          <Icon
            src={"/crypto-logos/metamask.png"}
            height={22}
            width={22}
            override={styles.walletButtonIcon}
            alt={"Metamask wallet logo"}
          />

          <span className={styles.walletText}>BSC Mainnet</span>
        </>
      )}
    </PillButton>
  );
};

export { WalletButton };
