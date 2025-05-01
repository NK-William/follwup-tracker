import { CSSProperties } from "react";
import { ITaskPhaseDetailsProps } from "./interface";

const getStyling = (
  props: ITaskPhaseDetailsProps
): {
  container: CSSProperties;
  title: CSSProperties;
  description: CSSProperties;
} => {
  return {
    container: {
      backgroundColor: "#D9D9D9",
      borderLeftWidth: 2,
      borderTopWidth: 2,
      borderBottomWidth: 2,
      borderColor: "#0c2",
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 14,
      paddingRight: 14,
      // maxWidth: 250,
      ...props.containerStyle,
    },
    title: { fontWeight: "bold", fontSize: 14, color: "#202020" },
    description: {
      fontSize: 14,
      color: "#202020",
      marginTop: 5,
      ...props.textStyle,
    },
  };
};

export default getStyling;
