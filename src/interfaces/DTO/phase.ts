import { taskPhaseStatus } from "../../enums";

export interface IPhaseDTO {
  id?: string;
  name: string;
  description?: string;
  icon?: string;
  number: number;
  status: taskPhaseStatus;
}
