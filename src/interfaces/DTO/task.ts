import { taskStatus } from "../../enums";
import { IPhaseDTO } from "..";

export interface ITaskDTO {
  id?: string;
  name: string;
  progressToHundred?: number;
  organization: string;
  status: taskStatus;
  description?: string;
  eta: Date;
  phases: IPhaseDTO[];
}
