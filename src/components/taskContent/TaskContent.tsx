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
    setShowFullDetailsView,
    handleShowFullDetailsView,
  } = useTaskContent();

  return (
    <div className="taskContent_container">
      <Header text={taskData?.name} />
      <FallingLines color={primary} width="60" visible={isLoading} />
      <Stats />
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
