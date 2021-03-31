import React from "react";
import { usePage } from "../hooks";
import { Header } from "../components/Header";
import { HeaderBanner } from "../components/HeaderBanner";
import { Search } from "../components/Search";
import { ROLES_ENUM, createUseStyles } from "@autofica/common";

type ComponentProps = {};

function Home(props: ComponentProps) {
  const [classes, contentEl, footerEl] = usePage();

  return (
    <>
      <header className={classes.header}>
        <Header role={ROLES_ENUM.UNAUTH} showAdManagerButton={true} />
      </header>
      <main ref={contentEl} className={classes.content}>
        <HeaderBanner />
        <Search carModels={[]} regions={[]} carMakes={[]} />
      </main>

      <footer ref={footerEl} className={classes.footer}>
        {/* <Footer /> */}
      </footer>
    </>
  );
}
export { Home };
