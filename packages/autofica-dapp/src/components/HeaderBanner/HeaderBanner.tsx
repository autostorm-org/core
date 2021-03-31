import React from "react";
import { HeaderBanner, BoundedRow } from "@autofica/common";
import { createUseStyles } from "@autofica/common";
import testcargoodcrop from "./testcargoodcrop.png";

const useStyles = createUseStyles((theme: any) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    flexDirection: "row",
    height: 250,
    alignItems: "flex-end",
    display: "flex",
    "@media (max-width:680px)": {
      display: "none",
    },
  },
  flexContainer: {
    display: "flex",
    alignItems: "center",
    width: 800,
    height: 250,
  },
  headerBannerContainer: {
    position: "relative",
    top: 20,
    width: 450,
    maxWidth: "50%",
    zIndex: 51,

    "@media (max-width:768px)": {
      maxWidth: "45%",
    },

    "@media (max-width:900px)": {
      maxWidth: "38%",
    },
  },

  carImage: {
    // position: "absolute",
    zIndex: 50,
    right: 0,
    // transform: "translate(-15%, 0)",
    maxWidth: 400,
    height: "auto",
    "@media (max-width:768px)": {
      // transform: "translate(0, 0)",
      maxWidth: 380,
      position: "relative",
      right: 15,
    },
  },
}));
// type HeaderBarnnerProps = {};

function HeaderBarnner() {
  //   const styles = useStyles(props);
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <BoundedRow>
        <div className={styles.flexContainer}>
          <div className={styles.headerBannerContainer}>
            <HeaderBanner
              bannerText={"Buy your next car with cryptocurrency."}
            />
          </div>

          <img alt={"Car"} src={testcargoodcrop} className={styles.carImage} />
        </div>
      </BoundedRow>
    </div>
  );
}
export default HeaderBarnner;
