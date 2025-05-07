import React from "react";
import { useTaskContent } from "./util";
import "./taskContent.css";
import { Header, Stats, Track, FullDetailsView } from "..";
import { FallingLines } from "react-loader-spinner";
import { primary } from "../../constants/colors";

const TaskContent = () => {
  const {
    taskData,
    isLoading,
    showFullDetailsView,
    fullDetailsViewData,
    noDataAfterFetch,
    setShowFullDetailsView,
    handleShowFullDetailsView,
    getNumberOfCompletedPhases,
  } = useTaskContent();

  return (
    <div className="taskContent_container">
      <Header text={taskData?.name} />
      {noDataAfterFetch && (
        <div className="taskContent_placeholder_container">
          <img src={"placeholder.png"} alt="Empty Placeholder" />
          <p>Something went wrong</p>
        </div>
      )}
      <div className="taskContent_loader_container">
        <FallingLines color={primary} width="60" visible={isLoading} />
      </div>
      <Stats
        currentPhase={getNumberOfCompletedPhases()}
        phasesSum={taskData?.phases.length}
        CompletionDate={taskData ? new Date(taskData?.eta) : undefined}
      />
      <Track task={taskData} onClick={handleShowFullDetailsView} />
      {showFullDetailsView && (
        <FullDetailsView
          title={fullDetailsViewData.title}
          text={fullDetailsViewData.text}
          onClose={() => setShowFullDetailsView(false)}
        />
      )}
    </div>
  );
};

export default TaskContent;
