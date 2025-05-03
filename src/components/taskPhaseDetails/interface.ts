import { CSSProperties } from "react";
import { IFullDetailsViewData } from "../../interfaces";

export interface ITaskPhaseDetailsProps {
  title: string;
  description?: string;
  containerStyle?: CSSProperties;
  textStyle?: CSSProperties;
  hasLimitedTitleLines?: boolean;
  hasLimitedDescriptionLines?: boolean;
  onClick: (detailsData: IFullDetailsViewData) => void;
}
