import React from "react";

const PlayerGeneralInfo = ({ player }) => {
  return (
    <div>
      <h3>{`${player.first_name} ${player.last_name}`}</h3>
      <p>Team: {player.player_team}</p>
      <p>Position: {player.position}</p>
    </div>
  );
};

export default PlayerGeneralInfo;
