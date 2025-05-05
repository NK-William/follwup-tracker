import React, { FC } from "react";
import "./track.css";
import { useRow, useTrack } from "./util";
import { IPhaseDTO } from "../../interfaces";
import getStyling from "./style";
import { TaskNumberBadge, TaskPhaseDetails, TaskTrackLine } from "..";
import { LiaToolsSolid } from "react-icons/lia";
import { ITrackProps } from "./interface";

const Track: FC<ITrackProps> = (props) => {
  const { task, onClick } = props;
  const { phases } = useTrack(task);
  const styles = getStyling();
  // TODO::: Don't use IPhaseDTO here, it should be inner model => phaseDTO
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

    return (
      <div className="track_row_container">
        <div style={styles.rowContainer}>
          <div style={styles.rowIconBadgeContainer}>
            {icon ? (
              // TODO::: Add a component for this
              <LiaToolsSolid
                size={30}
                style={{ ...styles.rowIcon, ...taskIconStyleOverride }}
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
          <div
            style={styles.taskPhaseDetails}
            onClick={() =>
              // expandPhaseDetails({ TODO::: resolve this
              //   name: name,
              //   description: description ?? "",
              // })
              null
            }
          >
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
        {/* TODO::: Don't use IPhaseDTO here, it should be inner model => phaseDTO */}
        {phases?.map((phase) => (
          <Row key={phase.id} phase={phase} />
        ))}
      </div>
    </div>
  );
};

export default Track;
