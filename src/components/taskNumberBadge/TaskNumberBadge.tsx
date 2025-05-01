import React, { FC } from "react";
import getStyling from "./style";
import { ITaskNumberBadgeProps } from "./interface";

const TaskNumberBadge: FC<ITaskNumberBadgeProps> = (props) => {
  const { number } = props;
  const styles = getStyling(props);
  return (
    <div style={styles.container}>
      <p style={styles.number}>{number}</p>
    </div>
  );
};

export default TaskNumberBadge;
