import { CSSProperties } from "react";
import { ITaskNumberBadgeProps } from "./interface";
import { primary } from "../../constants/colors";

const getStyling = (
  props: ITaskNumberBadgeProps
): {
  container: CSSProperties;
  number: CSSProperties;
} => {
  return {
    container: {
      display: "flex",
      width: 55,
      height: 55,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: primary,
      ...props.containerStyle,
    },
    number: {
      color: "white",
      fontSize: 22,
      fontWeight: "bold",
      ...props.numberStyle,
    },
  };
};

export default getStyling;
