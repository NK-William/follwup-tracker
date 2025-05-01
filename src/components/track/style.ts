import { CSSProperties } from "react";

const getStyling = (): {
  rowContainer: CSSProperties;
  rowIconBadgeContainer: CSSProperties;
  actionIcon: CSSProperties;
  rowIcon: CSSProperties;
  taskNumberBadge: CSSProperties;
  taskPhaseDetails: CSSProperties;
  trackContainer: CSSProperties;
} => {
  return {
    rowContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      height: 76,
    },
    rowIconBadgeContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      position: "absolute",
      left: 33,
    },
    actionIcon: {
      //   color: accent,
      color: "#0c2",
    },
    rowIcon: {
      // color: primary,
      color: "#38a",
      transform: "translateX(-33px)",
    },
    taskNumberBadge: { transform: "translateX(-25px)" },
    taskPhaseDetails: {
      position: "absolute",
      right: 0,
      marginLeft: 100,
    },
    trackContainer: {
      height: 48,
      display: "flex",
      minWidth: 20,
      justifyContent: "flex-start",
      marginTop: -11,
      marginBottom: -11,
      marginRight: 8,
      transform: "translateX(65px)",
    },
  };
};

export default getStyling;
