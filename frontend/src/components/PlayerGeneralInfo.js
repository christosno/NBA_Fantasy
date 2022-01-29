import React from "react";

const PlayerGeneralInfo = ({ player }) => {
  console.log(player);
  return (
    <div>
      <h3>{`${player.first_name} ${player.last_name}`}</h3>
      <p>Team: {player.player_team}</p>
      <p>Position: {player.position}</p>
      <p>Height: {`${player.height} feet`}</p>
      <p>Weight: {`${player.weight} pounds`}</p>
    </div>
  );
};

export default PlayerGeneralInfo;
