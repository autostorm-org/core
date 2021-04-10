import React, { useState, useRef, useEffect, useCallback } from "react";
import { createUseStyles } from "../../theme";

const useStyles = createUseStyles(function (theme) {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      paddingLeft: "0",
      marginBottom: "0",
      listStyle: "none",
    },
    content: {
      font: `${theme.header.fontWeight} ${theme.header.fontSize}/22px ${theme.header.font}`,
      display: "inline-block",
      textAlign: "left",
      letterSpacing: "0",
      backgroundColor: theme.header.backgroundColor,
      color: theme.header.color,
      opacity: "1",
      whiteSpace: "nowrap",
      padding: "20px 14px 20px 14px",

      boxSizing: "border-box",
      userSelect: "none",
      transition: "0.3s",
      textDecoration: "none",

      "&:hover": {
        backgroundColor: `${theme.header.backgroundColorHover}`,
        textDecoration: "none",
      },
      "&:focus": {
        outline: `2px dashed ${theme.accessibility.boxColor}`,
        zIndex: 20,
      },
      "&:active": {
        backgroundColor: theme.header.backgroundColorActive,
      },
    },
    submenu: { padding: 0 },
  };
});

function HeaderItem(props) {
  const classes = useStyles(props);
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
  return (
    <li
      ref={node}
      className={classes.root}
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
      <AnchorElement href={props.href} className={`${classes.content}`}>
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
          <div className={classes.submenu}>
            {<Submenu sections={props.sections} />}
          </div>
        </>
      ) : (
        ""
      )}
    </li>
  );
}
export default HeaderItem;
