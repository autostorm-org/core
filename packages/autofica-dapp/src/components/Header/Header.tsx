import {
  Header,
  HeaderItem,
  HeaderLogo,
  HeaderItemAbsolute,
  HeaderLocations,
  ListFixed,
  ListFullScreen,
  ListFullScreenRenderer,
  ResponsiveTemplate,
} from "@autofica/common";
import React from "react";
import { Menu, User, Heart } from "react-feather";
import { ROLES_ENUM, createUseStyles } from "@autofica/common";
import { Button } from "@material-ui/core";

type HeaderProps_T = {
  role: ROLES_ENUM;
  showAdManagerButton: boolean;
};

const useStyles = createUseStyles((theme: any) => ({
  button: {
    backgroundColor: "white !important",
    color: `${theme.palette.primary.main} !important`,
  },
}));

export const Desktop = ({
  role = ROLES_ENUM.UNAUTH,
  showAdManagerButton = true,
}: HeaderProps_T) => {
  const classes = useStyles();
  console.log(classes);
  return (
    <Header>
      <HeaderLogo
        logoPath={"/autofica-logo.svg"}
        itemLocation={HeaderLocations.left}
      />

      <HeaderItem href={"/sell"}>Vende</HeaderItem>
      <HeaderItem href={"/contact"}>Contacto</HeaderItem>
      <HeaderItem href={"/help"}>Ayuda</HeaderItem>
      {role != null && role == ROLES_ENUM.UNAUTH ? (
        <HeaderItem href={"/login"}>Mi Cuenta</HeaderItem>
      ) : (
        // <a href={`/users/${username}`} >
        //   <HeaderItem>
        //     <User size={20} />
        //     <span style={{ marginLeft: 10 }}>{firstName}</span>
        //   </HeaderItem>
        // </a>

        <HeaderItem
          dropDown
          sections={[
            {
              links: [
                {
                  content: (
                    <a href={`/users/${"username"}/profile`}>
                      <>
                        <User size={20} />
                        <span style={{ marginLeft: 10 }}>Mi perfil</span>
                      </>
                    </a>
                  ),
                },
                {
                  content: (
                    <a href={`/users/${"username"}/favoritos`}>
                      <>
                        <Heart size={20} />
                        <span style={{ marginLeft: 10 }}>
                          Mis autos favoritos
                        </span>
                      </>
                    </a>
                  ),
                },
              ],
            },
          ]}
          Submenu={ListFixed}
        >
          <>
            <User size={20} />
            <span style={{ marginLeft: 10 }}>{"firstName"}</span>
          </>
        </HeaderItem>
      )}

      {/* <HeaderItem anchorElement="span"> */}
      {showAdManagerButton && (
        <Button
          classes={{
            root: classes.button, // class name, e.g. `classes-nesting-root-x`
            label: classes.label, // class name, e.g. `classes-nesting-label-x`
          }}
          onClick={() => {
            window.location.href = "/ad-manager";
          }}
        >
          Mis publicaciones
        </Button>
      )}
      {/* </HeaderItem> */}

      {/* <HeaderItem
          dropDown
          sections={[
            {
              links: [
                {
                  content: (
                    <>
                      <span>br-PT</span>{" "}
                    </>
                  ),
                },
              ],
            },
          ]}
          Submenu={ListFixed}
        >
          ES
        </HeaderItem> */}
    </Header>
  );
};

Desktop.defaultProps = {
  role: ROLES_ENUM.UNAUTH,
};

const Mobile = () => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <Header
      submenu={
        isOpen ? (
          <ListFullScreen>
            <a href={"/sell"}>
              <ListFullScreenRenderer>Vende</ListFullScreenRenderer>
            </a>
            <ListFullScreenRenderer>Contacto</ListFullScreenRenderer>
            <ListFullScreenRenderer>Ayuda</ListFullScreenRenderer>
            <ListFullScreenRenderer>Mi Cuenta</ListFullScreenRenderer>
          </ListFullScreen>
        ) : null
      }
    >
      <HeaderLogo
        logoPath={"/autofica-logo.svg"}
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

const ResponsiveStory = (props: HeaderProps_T) => (
  <ResponsiveTemplate
    mobile={Mobile}
    tablet={Mobile}
    desktop={Desktop}
    headerProps={props}
  />
);
export default ResponsiveStory;
