import { CSSProperties } from "react";
import { primary } from "../../constants/colors";

const getStyling = (): {
  rowIcon: CSSProperties;
} => {
  return {
    rowIcon: {
      color: primary,
      transform: "translateX(-33px)",
    },
  };
};

export default getStyling;
