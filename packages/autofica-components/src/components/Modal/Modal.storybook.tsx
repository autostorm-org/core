import React from "react";
import Modal from "./Modal";
import ModalDivider from "./ModalDivider";
import { Button } from "../Button";
import { Typography, TypographyVariant_ENUM } from "../Typography";
import { IconButton } from "../IconButton";
import { XCircle } from "react-feather";
export default {
  title: "Modal Story",
  component: Modal,
};

const useHideModalHandler = (setVisible: (isVisible: boolean) => void) => {
  return React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);
};

export const ModalStory = () => {
  const [isVisible, setVisible] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);
  const hideModalCallback = useHideModalHandler(setVisible);

  return (
    <>
      <Button
        ref={buttonRef}
        onClick={() => {
          setVisible(true);
        }}
      >
        Open Modal
      </Button>

      <Modal
        isVisible={isVisible}
        setVisible={setVisible}
        onBackdropClick={hideModalCallback}
        onEscapePressed={hideModalCallback}
        modalDidClose={() => {
          if (buttonRef.current != null) {
            buttonRef.current.focus();
          }
        }}
      >
        <div>
          <div>
            <IconButton
              style={{
                marginLeft: "auto",
                display: "block",
                position: "absolute",
                top: 10,
                right: 10,
              }}
              aria-label={"Close Modal Button"}
              onClick={() => {
                setVisible(false);
              }}
            >
              <XCircle />
            </IconButton>
          </div>
          <Typography variant={TypographyVariant_ENUM.h3}>hellop</Typography>
          <ModalDivider />

          <br></br>

          <Typography variant={TypographyVariant_ENUM.p}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
          <br></br>

          <Button style={{ marginTop: 20 }}>Hello</Button>
        </div>
      </Modal>
    </>
  );
};
