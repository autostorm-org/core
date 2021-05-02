import React from "react";
import IconButton from "./IconButton";
import { Typography, TypographyVariant_ENUM } from "../Typography";
import { Card } from "../Card";
import { XCircle, Menu, Moon, Sun } from "react-feather";
export default {
  title: "IconButton Stories",
  component: IconButton,
};

const XCircleIconButtonStory = () => {
  return (
    <IconButton aria-label={"Close Button"}>
      <XCircle />
    </IconButton>
  );
};
const MenuIconButtonStory = () => {
  return (
    <IconButton aria-label={"Toggle Menu Button"}>
      <Menu />
    </IconButton>
  );
};

const useToggleHandler = (
  dayMode: boolean,
  setDayMode: (v: boolean) => void
) => {
  return React.useCallback(() => {
    setDayMode(!dayMode);
  }, [dayMode, setDayMode]);
};
const ThemeToggleButtonStory = (props: { disabled?: boolean }) => {
  const [dayMode, setDayMode] = React.useState(false);
  const toggleHandler = useToggleHandler(dayMode, setDayMode);
  const label = `Switch to ${dayMode ? "Night" : "Day"} Theme Button`;
  return (
    <IconButton
      onClick={toggleHandler}
      disabled={props.disabled}
      aria-label={label}
      title={label}
    >
      {dayMode ? <Sun /> : <Moon />}
    </IconButton>
  );
};

export const IconButtonStory = () => {
  return (
    <Card>
      <Typography variant={TypographyVariant_ENUM.h5}>
        Close Icon Button
      </Typography>
      <br />

      <XCircleIconButtonStory />
      <br />

      <Typography variant={TypographyVariant_ENUM.h5}>
        Menu Icon Button
      </Typography>
      <br />

      <MenuIconButtonStory />
      <br />

      <Typography variant={TypographyVariant_ENUM.h5}>Theme Toggle</Typography>
      <br />

      <ThemeToggleButtonStory />
      <br />

      <Typography variant={TypographyVariant_ENUM.h5}>Disabled</Typography>
      <br />

      <ThemeToggleButtonStory disabled />
    </Card>
  );
};
