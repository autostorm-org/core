import { createUseStyles } from "@autofica/common";
import React, { useRef, useCallback } from "react";

const usePage = function () {
  const usePageStyles = createUseStyles({
    header: {
      position: "absolute",
      top: "0",
      width: "100%",
      zIndex: "100",
    },

    content: {
      paddingTop: "65px",
      boxSizing: "border-box",
      overflow: "hidden",
      // marginBottom: "100px",
      position: "relative",
      zIndex: "90",
      backgroundColor: "white",
    },
    footer: {
      position: "relative",
      bottom: 0,
      width: "100%",
      zIndex: -1,
    },
    "@media (max-width: 1000px)": {
      // content: { marginTop: "75px" },
      footer: { position: "relative" },
      content: { marginBottom: 0 },
    },
  });

  const footerEl: any = useRef(null);
  const contentEl: any = useRef(null);
  const pageClasses = usePageStyles();

  const cb = useCallback(
    function () {
      const height =
        footerEl.current.clientHeight ||
        footerEl.current.clientHeight ||
        footerEl.current.offSetHeight ||
        0;

      footerEl.current.style.height = `${height}px`;
      // footerEl.current.style.position = `absolute`;
      const contentHeight =
        contentEl.current.clientHeight || contentEl.current.offsetHeight;

      // if (lastHeight == contentHeight + height) {
      //   return;
      // }

      if (contentHeight + height > window.innerHeight) {
        footerEl.current.style.position = `relative`;
      }

      // contentEl.current.style.paddingBottom = `${height}px`;
      contentEl.current.style.minHeight = `${window.innerHeight - height}px`;
    },
    [footerEl, contentEl]
  );

  React.useEffect(function () {
    cb();
    window.addEventListener("resize", cb);
    // const id = setInterval(cb, 500);
    return function () {
      window.removeEventListener("resize", cb);
      // clearInterval(id);
    };
  });

  return [pageClasses, contentEl, footerEl];
};

export default usePage;
