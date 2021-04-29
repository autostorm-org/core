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
import { Eye, ArrowLeftCircle, DollarSign, ArrowUp, Key } from "react-feather";

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

export const DashboardTemplateStory = () => {
  return (
    <>
      <HeaderResponsive
        options={[
          { content: "Loan Manager", href: "#" },
          { content: "Whitepaper", href: "#" },
          {
            content: (
              <>
                es-ES{" "}
                <Icon src={Spain} width={23} height={13} alt={"espanol"} />
              </>
            ),
          },
        ]}
      />
      <div style={{ marginTop: 30 }}>
        <BoundedRow>
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
                <DashboardOptionsColumn style={{ borderTopLeftRadius: 8 }}>
                  <div style={{ marginTop: 30, marginBottom: 20 }}>
                    <PillButton
                      onClick={() => {
                        console.log("CLIICK");
                      }}
                    >
                      <Icon
                        src={"crypto-logos/bsc.svg"}
                        height={22}
                        width={22}
                        alt={"BSC logo"}
                        style={{ marginRight: 10 }}
                      />
                      BSC Mainnet
                    </PillButton>
                  </div>

                  <DashboardOptionsItem href={"#"} activeElement>
                    <Eye style={{ marginRight: 10 }} />
                    Loans Overview
                  </DashboardOptionsItem>
                  <DashboardOptionsItem href={"#"}>
                    <ArrowLeftCircle style={{ marginRight: 10 }} />
                    Borrow
                  </DashboardOptionsItem>
                  <DashboardOptionsItem href={"#"}>
                    <DollarSign style={{ marginRight: 10 }} />
                    Payback
                  </DashboardOptionsItem>
                  <DashboardOptionsItem href={"#"}>
                    <ArrowUp style={{ marginRight: 10 }} />
                    Withdraw Collateral
                  </DashboardOptionsItem>
                  <DashboardOptionsItem href={"#"}>
                    <Key style={{ marginRight: 10 }} />
                    Deposit
                  </DashboardOptionsItem>
                </DashboardOptionsColumn>
              </>
            }
          />
        </BoundedRow>
      </div>
    </>
  );
};
