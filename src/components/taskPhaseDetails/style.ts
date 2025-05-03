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
      borderLeftWidth: 2,
      borderTopWidth: 2,
      borderBottomWidth: 2,
      borderColor: accent, // TODO::: Border is not working, fix it
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 14,
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
