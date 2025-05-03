import { CSSProperties } from "react";
import { ITaskPhaseDetailsProps } from "./interface";
import { accent, grayLight, darkText } from "../../constants/colors";

const getStyling = (
  props: ITaskPhaseDetailsProps
): {
  container: CSSProperties;
  title: CSSProperties;
  description: CSSProperties;
} => {
  return {
    container: {
      backgroundColor: grayLight,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      borderTop: "2px solid " + accent,
      borderBottom: "2px solid " + accent,
      borderLeft: "2px solid " + accent,
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 14,
      cursor: "pointer",
      paddingRight: 14,
      // maxWidth: 250,
      ...props.containerStyle,
    },
    title: {
      fontWeight: "bold",
      fontSize: 14,
      color: darkText,
      ...props.textStyle,
    },
    description: {
      fontSize: 14,
      color: darkText,
      marginTop: 5,
      ...props.textStyle,
    },
  };
};

export default getStyling;
