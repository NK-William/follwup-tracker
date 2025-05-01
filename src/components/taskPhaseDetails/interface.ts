import { CSSProperties } from "react";

export interface ITaskPhaseDetailsProps {
  title: string;
  description?: string;
  containerStyle?: CSSProperties;
  textStyle?: CSSProperties;
  hasLimitedTitleLines?: boolean;
  hasLimitedDescriptionLines?: boolean;
}
