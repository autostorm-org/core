import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "./HeaderItem.module.scss";
import { WithOverrides } from "../../types";

type HeaderItemProps = WithOverrides<
  React.PropsWithChildren<{
    dropDown?: boolean;
    Submenu?: React.JSXElementConstructor<{ sections: any }>;
    caret?: boolean;
    noHover?: boolean;
    anchorElement?: React.JSXElementConstructor<any>;
    href?: string;
    sections?: any;
  }>
>;

const HeaderItem = (props: HeaderItemProps) => {
  const { dropDown, Submenu, caret, noHover } = props;
  const [isOpen, setOpen] = useState(false);
  const node = useRef<HTMLLIElement | null>(null);
  const cb = useCallback(
    function handler(e) {
      if (node.current != null && node.current.contains(e.target)) {
        if (node.current === e.target) setOpen(!isOpen);
        return;
      }
      setOpen(false);
    },
    [isOpen]
  );
  useEffect(
    function () {
      document.addEventListener("mousedown", cb, false);
      return function () {
        document.removeEventListener("mousedown", cb, false);
      };
    },
    [isOpen]
  );
  const AnchorElement = props.anchorElement || "a";
  const overrideClass = props.override || "";
  return (
    <li
      ref={node}
      className={`${styles.root} ${overrideClass}`}
      role="none"
      onMouseEnter={function () {
        if (!noHover) setOpen(true);
      }}
      onMouseLeave={function () {
        if (!noHover) setOpen(false);
      }}
      onClick={function (e) {
        if (noHover) setOpen(true);
      }}
    >
      <AnchorElement href={props.href} className={`${styles.content}`}>
        <>
          {props.children}
          {dropDown && caret ? (
            isOpen ? (
              <i className="fas fa-caret-up" aria-hidden="true"></i>
            ) : (
              <i className="fas fa-caret-down" aria-hidden="true"></i>
            )
          ) : (
            ""
          )}
        </>
      </AnchorElement>
      {dropDown && isOpen && Submenu ? (
        <>
          <div className={styles.submenu}>
            {<Submenu sections={props.sections} />}
          </div>
        </>
      ) : (
        ""
      )}
    </li>
  );
};
export default HeaderItem;
export type { HeaderItemProps };
