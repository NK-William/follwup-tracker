import React from "react";
import { useTaskContent } from "./util";
import "./taskContent.css";
import { Header, Stats, Track, FullDetailsView } from "..";

const TaskContent = () => {
  const { taskData } = useTaskContent();

  return (
    <div className="taskContent_container">
      <Header />
      <Stats />
      <Track />
      <FullDetailsView
        title="Hey"
        text="Yo"
        onClose={() => console.log("closing")}
      />
    </div>
  );
};

export default TaskContent;
