import { CSSProperties } from "react";
import { ITaskTrackLineProps } from "./interface";

const getStyling = (
  props: ITaskTrackLineProps
): {
  container: CSSProperties;
} => {
  return {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#38a",
      height: 48,
      width: 3,
      ...props.containerStyle,
    },
  };
};

export default getStyling;
