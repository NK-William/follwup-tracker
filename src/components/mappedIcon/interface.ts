import { CSSProperties } from "react";
import { IIconNameType } from "../../interfaces";

export interface IMappedIconProps {
  icon: IIconNameType;
  taskIconStyleOverride?: CSSProperties;
}
