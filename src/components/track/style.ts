import { CSSProperties } from "react";
import { primary, accent } from "../../constants/colors";

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
      color: accent,
    },
    rowIcon: {
      color: primary,
      transform: "translateX(-33px)",
    },
    taskNumberBadge: { transform: "translateX(-25px)" },
    taskPhaseDetails: {
      position: "absolute",
      right: 0,
      marginLeft: 110,
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
