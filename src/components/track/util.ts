import { IPhaseDTO } from "../../interfaces";

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
    description: "We will send a quotation before we start ordering the parts.",
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
