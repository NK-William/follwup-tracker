import React, { FC } from "react";
import getStyling from "./style";
import { ITaskPhaseDetailsProps } from "./interface";

const TaskPhaseDetails: FC<ITaskPhaseDetailsProps> = (props) => {
  const {
    title,
    description,
    hasLimitedTitleLines,
    hasLimitedDescriptionLines,
    onClick,
  } = props;
  const styles = getStyling(props);
  return (
    <div
      style={styles.container}
      onClick={() => onClick({ title, text: description })}
    >
      <div
        style={{
          ...styles.title,
          whiteSpace: hasLimitedTitleLines ? "nowrap" : "normal",
          overflow: hasLimitedTitleLines ? "hidden" : "visible",
          textOverflow: hasLimitedTitleLines ? "ellipsis" : "clip",
        }}
      >
        {title}
      </div>
      {description ? (
        <p
          style={{
            ...styles.description,
            display: hasLimitedDescriptionLines ? "-webkit-box" : "block",
            WebkitLineClamp: hasLimitedDescriptionLines ? 2 : "unset",
            WebkitBoxOrient: hasLimitedDescriptionLines ? "vertical" : "unset",
            overflow: hasLimitedDescriptionLines ? "hidden" : "visible",
            textOverflow: hasLimitedDescriptionLines ? "ellipsis" : "clip",
          }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default TaskPhaseDetails;
