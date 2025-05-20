import { IFullDetailsViewData, ITaskDTO } from "../../interfaces";
import { useEffect, useState } from "react";
import getAxiosClient from "../../util/axiosConfig";
import { trackerTaskApi } from "../../constants/apis";
import { useParams } from "react-router-dom";
import { taskPhaseStatus } from "../../enums";

let noDataAfterFetch = false;

export const useTaskContent = () => {
  const { taskId } = useParams();
  const [showFullDetailsView, setShowFullDetailsView] = useState(false);
  const [fullDetailsViewData, setFullDetailsViewData] =
    useState<IFullDetailsViewData>({ title: "", text: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [task, setTask] = useState<ITaskDTO | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    console.log("useEffect triggered");
    apiFetchTrackerTask();
  }, [taskId]);

  console.log("Task ID from URL:", taskId);

  const apiFetchTrackerTask = async () => {
    try {
      const axiosClient = getAxiosClient();
      setIsLoading(true);
      const response = await axiosClient.get(`${trackerTaskApi}/${taskId}`);

      console.log("Tracker task response:", response.data);
      if (response.status === 200) {
        setTask(response.data);
      } else {
        // TODO::: Push error for tracking
        setErrorMessage("An error occurred displaying tracker task");
        noDataAfterFetch = true;
      }
    } catch (error) {
      // TODO::: Push error for tracking
      setErrorMessage("An error occurred displaying tracker task");
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
    errorMessage,
    setShowFullDetailsView,
    handleShowFullDetailsView,
    getNumberOfCompletedPhases,
  };
};
