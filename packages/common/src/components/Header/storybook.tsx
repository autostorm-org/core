import React from "react";
import Header from "./Header";
import HeaderLogo from "./HeaderLogo";
import { HeaderLocations } from "./constants";
import HeaderItem from "./HeaderItem";
import Spain from "../../assets/flags/Spain.png";
import Brazil from "../../assets/flags/Brazil.png";
import ResponsiveTemplate from "../ResponsiveTemplate";
import ListFixed from "../ListFixed";
import Icon from "../Icon";
import HeaderItemAbsolute from "./HeaderItemAbsolute";
import { ListFullScreen, ListFullScreenRenderer } from "../List";
import { Menu } from "react-feather";
// This default export determines where you story goes in the story list
export default {
  title: "Header",
  component: Header,
};
declare var require: any;

const logoPath = "./../../assets/autofica-defi-day-logo.svg";

const Desktop = (args) => (
  <Header>
    <HeaderLogo
      logoPath={require("./../../assets/autofica-defi-logo-short-6.svg")}
      itemLocation={HeaderLocations.left}
    />
    <HeaderItem>Loan Manager</HeaderItem>
    <HeaderItem>Whitepaper</HeaderItem>
    <HeaderItem
      dropDown
      sections={[
        {
          links: [
            {
              content: (
                <>
                  <span>br-PT</span>{" "}
                  <Icon
                    src={Brazil}
                    width={23}
                    height={13}
                    alt={"portuguese"}
                  />
                </>
              ),
            },
          ],
        },
      ]}
      Submenu={ListFixed}
    >
      es-ES <Icon src={Spain} width={23} height={13} alt={"espanol"} />
    </HeaderItem>
  </Header>
);

const Mobile = (args) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <Header
      submenu={
        isOpen ? (
          <ListFullScreen>
            <ListFullScreenRenderer>Vende</ListFullScreenRenderer>{" "}
            <ListFullScreenRenderer>Contacto</ListFullScreenRenderer>
            <ListFullScreenRenderer>Ayuda</ListFullScreenRenderer>
            <ListFullScreenRenderer>Mi Cuenta</ListFullScreenRenderer>
          </ListFullScreen>
        ) : null
      }
    >
      <HeaderLogo
        logoPath={require("./../../assets/autofica-defi-day-logo.svg")}
        itemLocation={HeaderLocations.center}
        overrides={{ paddingTop: 10, paddingBottom: 10, width: 125 }}
      />
      <HeaderItemAbsolute
        itemLocation={HeaderLocations.right}
        onClick={function () {
          setOpen(!isOpen);
        }}
      >
        <Menu color="white" />
      </HeaderItemAbsolute>
    </Header>
  );
};

const ResponsiveStory = () => (
  <ResponsiveTemplate mobile={Mobile} tablet={Desktop} desktop={Desktop} />
);

export const FirstStory = ResponsiveStory.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};
