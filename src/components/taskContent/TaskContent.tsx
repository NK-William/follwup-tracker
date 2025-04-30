import React from "react";
import { useTaskContent } from "./util";
import "./taskContent.css";
import { Header, Stats, Track } from "..";

const TaskContent = () => {
  const { taskData } = useTaskContent();
  return (
    <div className="taskContent_container">
      <Header />
      <Stats />
      <Track />
    </div>
  );
};

export default TaskContent;
