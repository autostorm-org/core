import React from "react";
import styles from "./ModalBackdrop.module.scss";

type onBackdropClickHandler = () => void;

interface IModalBackdropProps {
  onBackdropClick?: onBackdropClickHandler;
  isVisible: boolean;
  contentContainerOverride?: string;
}

const useBackdropClickHanlder = (
  innerContainerRef: React.MutableRefObject<HTMLDivElement | null>,
  onBackdropClick?: onBackdropClickHandler
) => {
  return React.useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (innerContainerRef.current != null) {
        if (
          e.target instanceof HTMLElement &&
          !innerContainerRef.current.contains(e.target)
        ) {
          if (onBackdropClick != null) {
            onBackdropClick();
          }
        }
      }
    },
    [innerContainerRef.current, onBackdropClick]
  );
};

const ModalBackdrop = (props: React.PropsWithChildren<IModalBackdropProps>) => {
  const innerContainerRef = React.useRef<HTMLDivElement | null>(null);

  const backdropClickHandler = useBackdropClickHanlder(
    innerContainerRef,
    props.onBackdropClick
  );

  const visibilityClass = props.isVisible
    ? styles.visibleRoot
    : styles.invisibleRoot;
  const contentContainerOverrideClass = props.contentContainerOverride ?? "";

  return (
    <div
      className={`${styles.root} ${visibilityClass}`}
      onClick={backdropClickHandler}
    >
      <div
        ref={innerContainerRef}
        className={`${styles.contentContainer} ${contentContainerOverrideClass}`}
      >
        {props.children}
      </div>
    </div>
  );
};
export default ModalBackdrop;
export type { IModalBackdropProps };
