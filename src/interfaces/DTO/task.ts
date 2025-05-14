import { taskStatus } from "../../enums";
import { IPhaseDTO } from "..";

// TODO::: Remove un-used properties
export interface ITaskDTO {
  id?: string;
  name: string;
  progressToHundred?: number;
  organization: string;
  status: taskStatus;
  description?: string;
  eta: Date;
  // color?: string;
  phases: IPhaseDTO[];
  // roles?: IRole[];
  // invitation?: IInvitation;
  // profileId?: string;
  // clientFirstName?: string;
  // clientLastName?: string;
  // clientEmail?: string;
  // clientPhone?: string;
}
