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
  useReserves,
  useUserAccountData,
  useBEP20Contract,
} from "@autofica/multiplier-sdk";
import styles from "./styles.module.scss";
import "@autofica/components/lib/index.css";
import "@autofica/components/lib/theme/day-theme.css";
import "@autofica/components/lib/theme/night-theme.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { OverviewPanelLoadable } from "./pages/OverviewPanelLoadable";
// // eslint-disable-next-line
// const ThemeChanger = () => {
//   const themer = useStaticThemeContext();

//   const toggle = () => {
//     if (themer.theme == null) {
//       themer.setTheme({
//         name: "theme1",
//       });
//       return;
//     }

//     if (themer.theme.name === "empty") {
//       themer.setTheme({
//         name: "theme1",
//       });
//     } else {
//       themer.setTheme({
//         name: "theme2",
//       });
//     }
//   };
//   return <Button onClick={toggle}>Toggle</Button>;
// };
// const AlertTriangleButton = () => {
//   const [state, setState] = React.useState(0);
//   const onClick = React.useCallback(() => {
//     const nextState = (state + 1) % 3;
//     setState(nextState);
//   }, [state]);
//   return (
//     <PillButton override={styles.buttonOverride} onClick={onClick}>
//       {state % 3 === 0 ? (
//         <>
//           <AlertTriangle
//             height={22}
//             width={22}
//             className={styles.walletButtonIcon}
//           />

//           <span className={styles.walletText}>Not connected</span>
//         </>
//       ) : state % 3 === 1 ? (
//         <>
//           <Icon
//             src={"/crypto-logos/bsc.svg"}
//             height={22}
//             width={22}
//             override={styles.walletButtonIcon}
//             alt={"Binance chain wallet logo"}
//           />

//           <span className={styles.walletText}>BSC Mainnet</span>
//         </>
//       ) : (
//         <>
//           <Icon
//             src={"/crypto-logos/metamask.png"}
//             height={22}
//             width={22}
//             override={styles.walletButtonIcon}
//             alt={"Metamask wallet logo"}
//           />

//           <span className={styles.walletText}>BSC Mainnet</span>
//         </>
//       )}
//     </PillButton>
//   );
// };

// function MainContent() {
//   const wallet = useWallet();
//   const lendingPool = useLendingPool(true);

//   // const userAccountData = useUserAccountData();
//   const reserves = useReserves();
//   const reserveAddresses = reserves.value ?? [];
//   const [c, coin3, coin1] = reserveAddresses;
//   const borrow = lendingPool.contract?.borrow;

//   const coin1BEP = useBEP20Contract(coin1);

//   const coinName = useAsyncValue(() => {
//     return coin1BEP.contract?.name();
//   }, [coin1BEP.contract != null, coin1BEP.account]);
//   console.log(wallet.provider);
//   return (
//     <div>
//       <Typography variant={TypographyVariant_ENUM.h3} style={{ padding: 30 }}>
//         connected {wallet.connected && "CONNECTED"}
//         connected {"CONNECTING"}
//       </Typography>
//       <Button
//         onClick={() =>
//           wallet
//             .connect("bsc")
//             .then(() => {
//               console.log("success");
//             })
//             .catch((e: any) => {
//               console.log(e);
//             })
//         }
//       >
//         Connect to BSC Wallet
//       </Button>
//       <Button
//         onClick={() => {
//           // if (borrow != null && wallet.provider != null && coin1 != null) {
//           //   borrow(coin1, BigNumber.from(1000000000), 1, 0);
//           // }
//         }}
//       >
//         Borrow
//       </Button>

//       <Typography variant={TypographyVariant_ENUM.h3} style={{ padding: 30 }}>
//         connected to {wallet.account ?? "NONE"}
//       </Typography>
//     </div>
//   );
// }

function App() {
  return (
    <MultiplierProvider chainId={SupportedNetworks.MAINNET}>
      <StaticThemeProvider initialTheme={{ name: "day" }}>
        <Router>
          <Route exact path="/" component={() => <>"jell"</>} />
          <Route path="/overview" component={OverviewPanelLoadable} />
        </Router>
      </StaticThemeProvider>
    </MultiplierProvider>
  );
}

export default App;
