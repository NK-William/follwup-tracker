import { IFullDetailsViewData, ITaskDTO } from "../../interfaces";
import { useEffect, useState } from "react";
import getAxiosClient from "../../util/axiosConfig";
import { trackerTaskApi } from "../../constants/apis";
import axios from "axios";
import { taskPhaseStatus } from "../../enums";

// Demo data
const demoTask: ITaskDTO = {
  id: "a2a40445-d8ca-4aa5-30c5-08dd0f1c6c21",
  name: "Demo Engine rebuild",
  progressToHundred: 0,
  organization: "KIA LAZARUS",
  status: 0,
  description: "On a VW GTI, 2016 year model.",
  eta: new Date(),
  phases: [
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
        "We will send a quotation before we start ordering the parts.",
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
  ],
};

let noDataAfterFetch = false;

export const useTaskContent = () => {
  const [showFullDetailsView, setShowFullDetailsView] = useState(false);
  const [fullDetailsViewData, setFullDetailsViewData] =
    useState<IFullDetailsViewData>({ title: "", text: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [task, setTask] = useState<ITaskDTO | undefined>(undefined);

  useEffect(() => {
    console.log("useEffect triggered");
    apiFetchTrackerTask();
  }, []);

  const apiFetchTrackerTask = async () => {
    try {
      const axiosClient = getAxiosClient();
      setIsLoading(true);
      const response = await axiosClient.get(
        `${trackerTaskApi}/6a987db0-5797-40f8-f995-08dd6ea858f3`
      );

      console.log("Tracker task response:", response.data);
      if (response.status === 200) {
        setTask(response.data);
      } else {
        // TODO::: Push error for tracking
        // TODO::: Display error view
        console.error("Error fetching tracker task:", response);
        noDataAfterFetch = true;
      }
    } catch (error) {
      // TODO::: Push error for tracking
      // TODO::: Display error view
      console.error("Error fetching tracker task:", error);
      noDataAfterFetch = true;
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowFullDetailsView = (data: IFullDetailsViewData) => {
    setFullDetailsViewData(data);
    setShowFullDetailsView(true);
  };

  const getNumberOfCompletedPhases = () => {
    if (!task) return 0;
    const completedPhases = task.phases.filter(
      (item) => item.status === taskPhaseStatus.Completed
    ).length;

    return completedPhases;
  };

  return {
    taskData: task,
    isLoading,
    showFullDetailsView,
    fullDetailsViewData,
    noDataAfterFetch,
    setShowFullDetailsView,
    handleShowFullDetailsView,
    getNumberOfCompletedPhases,
  };
};
