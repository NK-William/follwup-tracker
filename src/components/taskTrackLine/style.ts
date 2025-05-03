import { CSSProperties } from "react";
import { ITaskTrackLineProps } from "./interface";
import { primary } from "../../constants/colors";

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
      backgroundColor: primary,
      height: 48,
      width: 3,
      ...props.containerStyle,
    },
  };
};

export default getStyling;
