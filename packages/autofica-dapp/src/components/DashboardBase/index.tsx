import React from "react";
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
import styles from "./DashboardBase.module.scss";
import "@autofica/components/lib/index.css";
import "@autofica/components/lib/theme/day-theme.css";
import "@autofica/components/lib/theme/night-theme.css";

import { WalletButton } from "../WalletButton";

interface IDashboardBaseProps {}
const DashboardBase = (props: React.PropsWithChildren<IDashboardBaseProps>) => {
  return (
    <>
      <HeaderResponsive fullWidth options={[]} />
      <>
        <div>
          <DashboardTemplate
            mainContent={<>{props.children}</>}
            optionsContent={
              <>
                <DashboardOptionsColumn>
                  <div className={styles.buttonContainer}>
                    <WalletButton />
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
    </>
  );
};

export { DashboardBase };
