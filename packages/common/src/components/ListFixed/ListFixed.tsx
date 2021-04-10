import React, { useRef, useEffect } from "react";
import { createUseStyles } from "../../theme";
const intersect = function (viewport, element) {
  if (!viewport || !element)
    return {
      leftIntersect: false,
      rightIntersect: false,
      bottomIntersect: false,
      topIntersect: false,
    };
  const rightIntersect =
    viewport.width < (element.x || element.right) + element.width;
  const leftIntersect = 0 > (element.x || element.right);
  const bottomIntersect =
    viewport.height < (element.y || element.height) + element.height;
  const topIntersect = 0 > (element.y || element.height);
  return { leftIntersect, rightIntersect, bottomIntersect, topIntersect };
};

const useStyles = createUseStyles(function (theme) {
  return {
    root: {
      padding: "10px",
      position: "absolute",
      backgroundColor: theme.list.backgroundColor,
      boxSizing: "padding-box",
      border: "1px solid #CCCCCC",
      borderRadius: 5,
      opacity: "1",
      display: "flex",
      flexDirection: "row",
      transition: "all 0.5s ease",
    },
    subMenuSection: {
      display: "flex",
      margin: 0,
      padding: 0,
      flexDirection: "column",
      marginRight: 24,
      "& li": {
        listStyleType: "none",
        padding: 0,
      },
      "& li h3": {
        padding: 0,
        margin: 0,
      },
      "& li:last-child h3 a": {},
    },
    subMenuTitle: {
      margin: 0,
      padding: "0px 0px 0px 12px",
      textAlign: "left",
      font: `700 1.125rem/25px ${theme.list.font}`,
      letterSpacing: "0",
      color: `${theme.palette.primary.main}`,
      opacity: "1",
    },
    subMenuLink: {
      display: "block",
      padding: "8px 0px 8px 12px",
      textAlign: "left",
      fontWeight: theme.list.fontWeight,
      fontSize: theme.list.fontSize,
      fontFamily: theme.list.font,
      letterSpacing: "0",
      color: theme.list.color,
      opacity: "1",
      textDecoration: "none",
      width: 120,
      boxSizing: "border-box",
      // whiteSpace: "nowrap",
      "&:hover": {
        backgroundColor: theme.list.backgroundColorHover,
      },
      "&:focus": {
        backgroundColor: theme.list.backgroundColorFocus,
      },
    },
  };
});

function ListFixed(props) {
  const classes = useStyles(props);
  const { sections } = props;
  const root = useRef<HTMLDivElement | null>(null);
  useEffect(function () {
    if (root.current == null) {
      return;
    }
    let observer = new IntersectionObserver(function (data: any) {
      // console.log(data);
      if (data.length) {
        data = data[0];
        // console.log(intersect(data.rootBounds, data.boundingClientRect));
        if (!data.rootBounds || !data.boundingClientRect || !root.current)
          return;
        const { leftIntersect, rightIntersect } = intersect(
          data.rootBounds,
          data.boundingClientRect
        );
        if (leftIntersect && root.current) {
          root.current.style.left = "60px";
        } else if (rightIntersect && root.current) {
          root.current.style.right = "60px";
        }
      }
    });
    observer.observe(root.current);
    // root.current.style.display = "flex";
  });
  return (
    <div className={classes.root} ref={root}>
      {sections.map(function ({ title, links }) {
        return (
          <ul className={classes.subMenuSection} role="menu">
            {title ? <h2 className={classes.subMenuTitle}>{title}</h2> : ""}
            {links.map(function (link) {
              return (
                <li>
                  <h3>
                    <a href="#" {...link} className={classes.subMenuLink}>
                      {link.content}
                    </a>
                  </h3>
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
}

export default ListFixed;
export { ListFixed };
