import { IFullDetailsViewData, ITaskDTO } from "../../interfaces";
import { useEffect, useState } from "react";
import getAxiosClient from "../../util/axiosConfig";
import { trackerTaskApi } from "../../constants/apis";
import axios from "axios";
import { taskPhaseStatus } from "../../enums";

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
