import React from "react";
import DashboardTemplate from "./DashboardTemplate";
import { BoundedRow } from "../BoundedRow";
import { Typography, TypographyVariant_ENUM } from "../Typography";
import Icon from "../Icon";
import Spain from "../../assets/flags/Spain.png";
import { HeaderResponsive } from "../Header";
import DashboardOptionsColumn from "./DashboardOptionsColumn";
import DashboardOptionsItem from "./DashboardOptionsItem";
import { PillButton } from "./../PillButton";
import { FooterResponsive } from "../Footer";
import { AlertTriangle } from "react-feather";
import { Eye, ArrowLeftCircle, DollarSign, ArrowUp, Key } from "react-feather";
import styles from "./storybook.module.scss";

export default {
  title: "Dashboard Template Stories",
};

export const DashboardOptionsColumnStory = () => {
  return (
    <DashboardOptionsColumn>
      <DashboardOptionsItem activeElement href={"#"}>
        hello now
      </DashboardOptionsItem>
      <DashboardOptionsItem href={"#"}>hello now</DashboardOptionsItem>
      <DashboardOptionsItem href={"#"}>hello now</DashboardOptionsItem>
    </DashboardOptionsColumn>
  );
};

const AlertTriangleButton = () => {
  const [state, setState] = React.useState(0);
  const onClick = React.useCallback(() => {
    const nextState = (state + 1) % 3;
    setState(nextState);
  }, [state]);
  return (
    <PillButton override={styles.buttonOverride} onClick={onClick}>
      {state % 3 == 0 ? (
        <>
          <AlertTriangle
            height={22}
            width={22}
            className={styles.walletButtonIcon}
          />

          <span className={styles.walletText}>Not connected</span>
        </>
      ) : state % 3 == 1 ? (
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

export const DashboardTemplateStory = () => {
  return (
    <>
      <HeaderResponsive
        fullWidth
        options={[
          { content: "Loan Manager", href: "#" },
          { content: "Whitepaper", href: "#" },
        ]}
      />
      <div>
        <DashboardTemplate
          mainContent={
            <Typography
              variant={TypographyVariant_ENUM.h3}
              style={{ padding: 30 }}
            >
              Main Content
            </Typography>
          }
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
                  <span className={styles.optionText}>Withdraw Collateral</span>
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
  );
};
