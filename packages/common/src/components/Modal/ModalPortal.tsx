import React from "react";
import ReactDOM from "react-dom";
import { modalElementId } from "./Modal.constants";
import { getModalErrorMessage } from "./Modal.constants";
import type { IOverridable } from "../../types";

interface ModalPortalProps extends IOverridable {
  modalElementId?: string;
}

const getEscapeKeyListener = (
  firstFocusableElement: HTMLElement,
  lastFocusableElement: HTMLElement
) => {
  return (e: KeyboardEvent) => {
    let isTabPressed = e.key === "Tab" || e.keyCode === 9;
    if (!isTabPressed) {
      return;
    }
    if (e.shiftKey) {
      // if shift key pressed for shift + tab combination
      if (document.activeElement == firstFocusableElement) {
        // add focus for the last focusable element
        lastFocusableElement.focus();
        e.preventDefault();
      }
    } else {
      // if tab key is pressed
      if (document.activeElement == lastFocusableElement) {
        // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    }
  };
};

const useTabTrapping = (
  modalElRef: React.MutableRefObject<HTMLElement | null>
) => {
  return React.useLayoutEffect(() => {
    const modalEl = modalElRef.current;
    if (modalEl == null) {
      return;
    }
    const focusableElements =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    // get first element to be focused inside modal
    const firstFocusableElement = modalEl.querySelectorAll(
      focusableElements
    )[0];
    const focusableContent = modalEl.querySelectorAll(focusableElements);
    // get last element to be focused inside modal
    const lastFocusableElement = focusableContent[focusableContent.length - 1];

    let keyDownListener: (e: KeyboardEvent) => void = () => {};
    if (
      firstFocusableElement instanceof HTMLElement &&
      lastFocusableElement instanceof HTMLElement
    ) {
      keyDownListener = getEscapeKeyListener(
        firstFocusableElement,
        lastFocusableElement
      );
    }
    document.addEventListener("keydown", keyDownListener);

    if (firstFocusableElement instanceof HTMLElement) {
      // add focus for the last focusable element
      firstFocusableElement.focus();
    }

    return () => {
      document.removeEventListener("keydown", keyDownListener);
    };
  });
};

const useModalRef = (modalId: string) => {
  return React.useRef(document.getElementById(modalId));
};

const ModalPortal = (props: React.PropsWithChildren<ModalPortalProps>) => {
  const suppliedModalId = props.modalElementId ?? modalElementId;
  const modalElRef = useModalRef(suppliedModalId);
  useTabTrapping(modalElRef);
  if (modalElRef.current == null) {
    throw new Error(getModalErrorMessage(suppliedModalId));
  }
  return ReactDOM.createPortal(props.children, modalElRef.current);
};

export default ModalPortal;
export type { ModalPortalProps };
