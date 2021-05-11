import React from "react";
import { Button } from "@autofica/components";
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
import {
  ArrowLeftCircle,
  Eye,
  ArrowUp,
  DollarSign,
  Key,
  AlertTriangle,
} from "react-feather";
import {
  MultiplierProvider,
  useWallet,
  useLendingPoolAddressProvider,
  SupportedNetworks,
  useLendingPool,
  useAsyncValue,
} from "@autofica/multiplier-sdk";
import styles from "./styles.module.scss";
import "@autofica/components/lib/index.css";
import "@autofica/components/lib/theme/day-theme.css";
import "@autofica/components/lib/theme/night-theme.css";

// eslint-disable-next-line
const ThemeChanger = () => {
  const themer = useStaticThemeContext();

  const toggle = () => {
    if (themer.theme == null) {
      themer.setTheme({
        name: "theme1",
      });
      return;
    }

    if (themer.theme.name === "empty") {
      themer.setTheme({
        name: "theme1",
      });
    } else {
      themer.setTheme({
        name: "theme2",
      });
    }
  };
  return <Button onClick={toggle}>Toggle</Button>;
};
const AlertTriangleButton = () => {
  const [state, setState] = React.useState(0);
  const onClick = React.useCallback(() => {
    const nextState = (state + 1) % 3;
    setState(nextState);
  }, [state]);
  return (
    <PillButton override={styles.buttonOverride} onClick={onClick}>
      {state % 3 === 0 ? (
        <>
          <AlertTriangle
            height={22}
            width={22}
            className={styles.walletButtonIcon}
          />

          <span className={styles.walletText}>Not connected</span>
        </>
      ) : state % 3 === 1 ? (
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

function MainContent() {
  const wallet = useWallet();
  const lp = useLendingPool();
  const userAccountData = useAsyncValue(() => {
    return lp.contract?.getUserAccountData(wallet.account ?? "");
  }, [wallet.account, lp.contract == null]);
  console.log(userAccountData);

  return (
    <div>
      <Typography variant={TypographyVariant_ENUM.h3} style={{ padding: 30 }}>
        connected {wallet.connected && "CONNECTED"}
        connected {wallet.connecting && "CONNECTING"}
      </Typography>
      <Button onClick={() => wallet.connect("bsc")}>
        Connect to BSC Wallet
      </Button>

      <Typography variant={TypographyVariant_ENUM.h3} style={{ padding: 30 }}>
        {wallet.account}
      </Typography>
    </div>
  );
}

function App() {
  return (
    <MultiplierProvider chainId={SupportedNetworks.MAINNET}>
      <StaticThemeProvider initialTheme={{ name: "day" }}>
        <HeaderResponsive
          fullWidth
          options={[
            { content: "Loan Manager", href: "#" },
            { content: "Whitepaper", href: "#" },
          ]}
        />
        <>
          <div>
            <DashboardTemplate
              mainContent={<MainContent />}
              optionsContent={
                <>
                  <DashboardOptionsColumn>
                    <div className={styles.buttonContainer}>
                      <AlertTriangleButton />
                    </div>

                    <DashboardOptionsItem href={"#"} activeElement>
                      <Eye />
                      <span className={styles.optionText}>Loans Overview</span>
                    </DashboardOptionsItem>
                    <DashboardOptionsItem href={"#"}>
                      <ArrowLeftCircle />
                      <span className={styles.optionText}>Borrow</span>
                    </DashboardOptionsItem>
                    <DashboardOptionsItem href={"#"}>
                      <DollarSign />
                      <span className={styles.optionText}>Payback</span>
                    </DashboardOptionsItem>
                    <DashboardOptionsItem href={"#"}>
                      <ArrowUp />
                      <span className={styles.optionText}>
                        Withdraw Collateral
                      </span>
                    </DashboardOptionsItem>
                    <DashboardOptionsItem href={"#"}>
                      <Key />
                      <span className={styles.optionText}>Deposit</span>
                    </DashboardOptionsItem>
                  </DashboardOptionsColumn>
                </>
              }
            />
          </div>
        </>
      </StaticThemeProvider>
    </MultiplierProvider>
  );
}

export default App;
