import React from "react";
import { useTaskContent } from "./util";
import "./taskContent.css";
import { Header, Stats, Track, FullDetailsView } from "..";

const TaskContent = () => {
  const {
    taskData: demoTask,
    showFullDetailsView,
    fullDetailsViewData,
    setShowFullDetailsView,
    handleShowFullDetailsView,
  } = useTaskContent();

  return (
    <div className="taskContent_container">
      <Header />
      <Stats />
      <Track onClick={handleShowFullDetailsView} />
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
