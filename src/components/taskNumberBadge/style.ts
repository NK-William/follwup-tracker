import { CSSProperties } from "react";
import { ITaskNumberBadgeProps } from "./interface";

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
      backgroundColor: "#38a",
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
