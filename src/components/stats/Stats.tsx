import React, { FC } from "react";
import "./stats.css";
import { useStats } from "./util";
import { IStatsProps } from "./interface";

const Stats: FC<IStatsProps> = (props) => {
  const { currentPhase, phasesSum, CompletionDate } = props;
  const { getFormattedDate } = useStats(CompletionDate);
  return (
    <div className="stats_container">
      <p>
        {phasesSum && CompletionDate
          ? `${currentPhase} of ${phasesSum} tasks completed, estimated completion time is ${getFormattedDate()}`
          : ""}
      </p>
    </div>
  );
};

export default Stats;
