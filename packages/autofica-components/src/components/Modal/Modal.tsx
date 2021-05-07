import React from "react";
import ModalPortal from "./ModalPortal";
import ModalBackdrop from "./ModalBackdrop";
import { Card } from "../Card";

import styles from "./Modal.module.scss";

type ModalDidOpenHandler = () => void;
type ModalDidCloseHandler = () => void;
type OnBackDropClickHandler = () => void;
type OnEscapePressedHandler = () => void;

interface IModalProps {
  isVisible: boolean;
  setVisible: (isVisible: boolean) => void;
  modalDidOpen?: ModalDidOpenHandler;
  modalDidClose?: ModalDidCloseHandler;
  onBackdropClick?: OnBackDropClickHandler;
  onEscapePressed?: OnEscapePressedHandler;
  cardOverride?: string;
}

const useEscapePressedCallback = (onEscapePressed?: OnEscapePressedHandler) => {
  return React.useCallback(
    (e: KeyboardEvent) => {
      const escPressed = e.key == "Escape";
      if (escPressed == false) {
        return;
      }
      if (onEscapePressed) {
        onEscapePressed();
      }
    },
    [onEscapePressed]
  );
};

const useEscapePressed = (
  isVisible: boolean,
  onEscapePressed?: OnEscapePressedHandler
) => {
  const onEscapePressedCallback = useEscapePressedCallback(onEscapePressed);
  React.useLayoutEffect(() => {
    // Save for unmount closure
    const wasVisible = isVisible;
    // Add callback only when the component was visible
    if (isVisible == true) {
      document.addEventListener("keydown", onEscapePressedCallback);
    }
    return () => {
      // Read closure value and remove listener if it was added
      if (wasVisible == true) {
        document.removeEventListener("keydown", onEscapePressedCallback);
      }
    };
  }, [isVisible, onEscapePressedCallback]);
};

const useVisibilityChangeHandler = (
  isVisible: boolean,
  modalDidOpen?: ModalDidOpenHandler,
  modalDidClose?: ModalDidCloseHandler
) => {
  React.useLayoutEffect(() => {
    if (isVisible == true && modalDidOpen != null) {
      modalDidOpen();
    } else if (isVisible == false && modalDidClose != null) {
      modalDidClose();
    }
  }, [isVisible, modalDidOpen, modalDidClose]);
};

const useScrollLock = (isVisible: boolean) => {
  return React.useLayoutEffect(() => {
    // Add or remove style to prevent scrolling
    if (isVisible) {
      document.body.classList.add(styles.preventScrolling);
    } else {
      document.body.classList.remove(styles.preventScrolling);
    }
    return () => {
      // Finally if the style persists remove it.
      if (document.body.classList.contains(styles.preventScrolling)) {
        document.body.classList.remove(styles.preventScrolling);
      }
    };
  }, [isVisible]);
};

const Modal = React.memo((props: React.PropsWithChildren<IModalProps>) => {
  useEscapePressed(props.isVisible, props.onEscapePressed);
  useVisibilityChangeHandler(
    props.isVisible,
    props.modalDidOpen,
    props.modalDidClose
  );
  useScrollLock(props.isVisible);
  return (
    <ModalPortal isVisible={props.isVisible}>
      <ModalBackdrop
        isVisible={props.isVisible}
        onBackdropClick={props.onBackdropClick}
      >
        <Card override={`${styles.card} ${props.cardOverride ?? ""}`}>
          {props.children}
        </Card>
      </ModalBackdrop>
    </ModalPortal>
  );
});
export default Modal;
export type { IModalProps };
