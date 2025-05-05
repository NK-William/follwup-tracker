import { IFullDetailsViewData, ITaskDTO } from "../../interfaces";

export interface ITrackProps {
  task?: ITaskDTO;
  onClick: (detailsData: IFullDetailsViewData) => void;
}
