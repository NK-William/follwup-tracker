import React, { FC } from "react";
import getStyling from "./style";
import { ITaskTrackLineProps } from "./interface";

const TaskTrackLine: FC<ITaskTrackLineProps> = (props) => {
  const styles = getStyling(props);
  return <div style={styles.container} />;
};

export default TaskTrackLine;
