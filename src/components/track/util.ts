import { taskPhaseStatus } from "../../enums";
import { IPhaseDTO } from "../../interfaces";
import { primary, accent, grayLight, gray } from "../../constants/colors";

const phasesDemo: IPhaseDTO[] = [
  {
    id: "24f1d6b0-c5f9-4a7f-9fd1-08dd0f1c6c61",
    name: "Diagnostic",
    number: 1,
    description:
      "We will strip the engine to find all the parts we'll need to replace.",
    icon: "settings-outline",
    status: 2,
  },
  {
    id: "d87b3d38-be1e-4129-9fd2-08dd0f1c6c61",
    name: "Quotation",
    number: 2,
    description:
      "We will send a quotation before we start ordering the parts. eeefef erfe efen uf eb ergbre i er iuhgurehgurhgurhg urhgurgu hurhgrhuirhug rhg ro hrjg urrgn rgh irfniofhgb p grngoi rk thj iitjgoi oijgh oroij om gr4mg jorg rokniruhgo tngo n rnhgirnbhoi tki hntngoitjoihgn tn oirtjgboi tjng orihgior girgfvo",
    icon: "document-text-outline",
    status: 1,
  },
  {
    id: "e45ed5f9-92d8-4f98-9fd3-08dd0f1c6c61",
    name: "Awaiting parts",
    number: 3,
    description: "This will take about 7 working days",
    icon: "hourglass-outline",
    status: 0,
  },
  {
    id: "6882135c-7570-49aa-9fd4-08dd0f1c6c61",
    name: "Rebuild process",
    number: 4,
    description: "This will take about 2 weeks",
    icon: "construct-outline",
    status: 0,
  },
  {
    id: "a0852710-1dfa-40e4-9fd5-08dd0f1c6c61",
    name: "Test",
    number: 5,
    description: "We will test the car to ensure everything is working.",
    icon: "",
    status: 0,
  },
  {
    id: "aac7109f-bfa7-4531-9fd6-08dd0f1c6c61",
    name: "Ready",
    number: 6,
    description: "Car is ready for collection",
    icon: "call-outline",
    status: 0,
  },
];

export const useTrack = () => {
  return { phases: phasesDemo };
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
