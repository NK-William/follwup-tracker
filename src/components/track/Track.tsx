import React, { FC } from "react";
import "./track.css";
import { useRow, useTrack } from "./util";
import { IPhaseDTO } from "../../interfaces";
import getStyling from "./style";
import {
  MappedIcon,
  TaskNumberBadge,
  TaskPhaseDetails,
  TaskTrackLine,
} from "..";
import { ITrackProps } from "./interface";

const Track: FC<ITrackProps> = (props) => {
  const { task, onClick } = props;
  const { phases } = useTrack(task);
  const styles = getStyling();
  // TODO:::v2 Don't use IPhaseDTO here, it should be inner model => phaseDTO
  const Row = ({ phase }: { phase: IPhaseDTO }) => {
    const { id, name, description, number, icon, status } = phase;

    const {
      taskNumberBadgeStyleOverride,
      taskNumberBadgeNumberStyleOverride,
      taskPhaseDetailsHeight,
      taskPhaseDetailsStyleOverride,
      taskPhaseDetailsTextStyleOverride,
      taskTrackLineStyleOverride,
      taskIconStyleOverride,
    } = useRow(description, number, phases?.length, status);

    console.log("got icon: ", icon);

    return (
      <div className="track_row_container">
        <div style={styles.rowContainer}>
          <div style={styles.rowIconBadgeContainer}>
            {icon ? (
              <MappedIcon
                icon={icon}
                taskIconStyleOverride={taskIconStyleOverride}
              />
            ) : (
              <div style={{ width: 30 }} />
            )}
            <TaskNumberBadge
              containerStyle={{
                ...styles.taskNumberBadge,
                ...taskNumberBadgeStyleOverride,
              }}
              numberStyle={taskNumberBadgeNumberStyleOverride}
              number={number}
            />
          </div>
          <div style={styles.taskPhaseDetails}>
            <TaskPhaseDetails
              onClick={onClick}
              hasLimitedDescriptionLines
              hasLimitedTitleLines
              title={name}
              containerStyle={{
                height: taskPhaseDetailsHeight,
                ...taskPhaseDetailsStyleOverride,
              }}
              description={description}
              textStyle={taskPhaseDetailsTextStyleOverride}
            />
          </div>
        </div>
        <div style={styles.trackContainer}>
          <TaskTrackLine
            containerStyle={{
              ...taskTrackLineStyleOverride,
            }}
          />
        </div>
      </div>
    );
  };
  return (
    <div className="track_container">
      <div>
        {/* TODO:::v2 Don't use IPhaseDTO here, it should be inner model => phaseDTO */}
        {phases?.map((phase) => (
          <Row key={phase.id} phase={phase} />
        ))}
      </div>
    </div>
  );
};

export default Track;
