import { IIconNameType } from "..";
import { taskPhaseStatus } from "../../enums";

export interface IPhaseDTO {
  id?: string;
  name: string;
  description?: string;
  icon?: IIconNameType;
  number: number;
  status: taskPhaseStatus;
}
