import React from "react";

import { Table } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import "./PlayersTable.css";

const PlayersTable = ({ players }) => {
  console.log(players);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>#</th>
          <th>#</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <tr key={player.player_id}>
            <td>
              <Image className="player-image" src={player.image} />
            </td>
            <td>{`${player.last_name} ${player.first_name} // ${player.player_team} // ${player.position}`}</td>
            <td></td>
            <td></td>
            <td>
              <strong>{player.points}</strong>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PlayersTable;
