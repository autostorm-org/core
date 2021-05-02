import React from "react";
import styles from "./ModalBackdrop.module.scss";

type BackdropClickHandler = () => void;

interface IModalBackdropProps {
  backdropClickHandler: BackdropClickHandler;
  isVisible: boolean;
  contentContainerOverride?: string;
}

const useBackdropClickHanlder = (
  innerContainerRef: React.MutableRefObject<HTMLDivElement | null>,
  backdropClickHandler: BackdropClickHandler
) => {
  return React.useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (innerContainerRef.current != null) {
        if (
          e.target instanceof HTMLElement &&
          !innerContainerRef.current.contains(e.target)
        ) {
          backdropClickHandler();
        }
      }
    },
    [innerContainerRef.current, backdropClickHandler]
  );
};

const ModalBackdrop = (props: React.PropsWithChildren<IModalBackdropProps>) => {
  const innerContainerRef = React.useRef<HTMLDivElement | null>(null);

  const backdropClickHandler = useBackdropClickHanlder(
    innerContainerRef,
    props.backdropClickHandler
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
