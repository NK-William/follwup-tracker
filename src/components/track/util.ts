import { taskPhaseStatus } from "../../enums";
import { IPhaseDTO, ITaskDTO } from "../../interfaces";
import { primary, accent, grayLight, gray } from "../../constants/colors";

export const useTrack = (task?: ITaskDTO) => {
  return { phases: task?.phases };
};

export const useRow = (
  description?: string,
  number?: number,
  dataLength?: number,
  status: taskPhaseStatus = taskPhaseStatus.Completed
) => {
  let taskPhaseDetailsHeight = 76;
  if (!description) taskPhaseDetailsHeight = 40;

  // taskNumberBadge
  let taskNumberBadgeStyleOverride;
  let taskNumberBadgeNumberStyleOverride;

  // taskPhaseDetails
  let taskPhaseDetailsStyleOverride;
  let taskPhaseDetailsTextStyleOverride;

  // taskTrackLine
  let taskTrackLineStyleOverride;

  // taskIcon
  let taskIconStyleOverride;

  if (status === taskPhaseStatus.InProgress) {
    taskNumberBadgeStyleOverride = {
      backgroundColor: grayLight,
      borderWidth: 3,
      borderColor: primary,
    };
    taskTrackLineStyleOverride = { backgroundColor: grayLight };
    taskNumberBadgeNumberStyleOverride = { color: primary };
  } else if (status === taskPhaseStatus.Pending) {
    taskNumberBadgeStyleOverride = { backgroundColor: grayLight };
    taskNumberBadgeNumberStyleOverride = { color: accent };
    taskTrackLineStyleOverride = { backgroundColor: grayLight };
    taskPhaseDetailsStyleOverride = {
      borderTop: "2px solid " + grayLight,
      borderBottom: "2px solid " + grayLight,
      borderLeft: "2px solid " + grayLight,
    };
    taskPhaseDetailsTextStyleOverride = { color: gray };
    taskIconStyleOverride = { color: grayLight };
  }

  if (number === dataLength)
    taskTrackLineStyleOverride = { height: 23, backgroundColor: "transparent" };

  return {
    taskNumberBadgeStyleOverride,
    taskNumberBadgeNumberStyleOverride,
    taskPhaseDetailsHeight,
    taskPhaseDetailsStyleOverride,
    taskPhaseDetailsTextStyleOverride,
    taskTrackLineStyleOverride,
    taskIconStyleOverride,
  };
};
