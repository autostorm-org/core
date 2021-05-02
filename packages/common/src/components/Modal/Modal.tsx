import React from "react";
import ModalPortal from "./ModalPortal";
import ModalBackdrop from "./ModalBackdrop";
import { Card } from "../Card";

import styles from "./Modal.module.scss";

type onOpenHandler = () => void;
type onCloseHandler = () => void;

interface IModalProps {
  isVisible: boolean;
  setVisible: (isVisible: boolean) => void;
  onOpen?: onOpenHandler;
  onClose?: onCloseHandler;
  cardOverride?: string;
}
type setInvisibleCallback = () => void;

const useEscapePressedCallback = (setInvisible: setInvisibleCallback) => {
  return React.useCallback(
    (e: KeyboardEvent) => {
      const escPressed = e.key == "Escape";
      if (escPressed == false) {
        return;
      }
      setInvisible();
    },
    [setInvisible]
  );
};

const useEscapePressed = (
  isVisible: boolean,
  setInvisible: setInvisibleCallback
) => {
  const escapePressedCallback = useEscapePressedCallback(setInvisible);
  React.useLayoutEffect(() => {
    document.addEventListener("keydown", escapePressedCallback);
    return () => {
      document.removeEventListener("keydown", escapePressedCallback);
    };
  }, [isVisible, escapePressedCallback]);
};

const useSetInvisibleCallback = (
  setVisible: (isVisible: boolean) => void
): setInvisibleCallback => {
  return React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);
};
const useVisibilityChangeHandler = (
  isVisible: boolean,
  onOpen?: onOpenHandler,
  onClose?: onCloseHandler
) => {
  React.useLayoutEffect(() => {
    if (isVisible == true && onOpen != null) {
      onOpen();
    } else if (isVisible == false && onClose != null) {
      onClose();
    }
  }, [isVisible, onOpen, onClose]);
};

const Modal = (props: React.PropsWithChildren<IModalProps>) => {
  const setInvisibleCallback = useSetInvisibleCallback(props.setVisible);
  useEscapePressed(props.isVisible, setInvisibleCallback);
  useVisibilityChangeHandler(props.isVisible, props.onOpen, props.onClose);
  const cardOverrideClass = props.cardOverride ?? "";
  return (
    <ModalPortal>
      <ModalBackdrop
        isVisible={props.isVisible}
        backdropClickHandler={setInvisibleCallback}
      >
        <Card override={`${styles.card} ${cardOverrideClass}`}>
          {props.children}
        </Card>
      </ModalBackdrop>
    </ModalPortal>
  );
};
export default Modal;
export type { IModalProps };
