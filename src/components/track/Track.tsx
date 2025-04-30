import React, { FC } from "react";
import "./track.css";
import { useTrack } from "./util";
import { IPhaseDTO } from "../../interfaces";

const Track = () => {
  const { phases } = useTrack();
  // TODO::: Don't use IPhaseDTO here, it should be inner model => phaseDTO
  const Row = ({ phase }: { phase: IPhaseDTO }) => {
    return <p>{phase.name}</p>;
  };
  return (
    <div className="track_container">
      <div className="track_body">
        {/* TODO::: Don't use IPhaseDTO here, it should be inner model => phaseDTO */}
        {phases.map((phase) => (
          <Row key={phase.id} phase={phase} />
        ))}
      </div>
    </div>
  );
};

export default Track;
