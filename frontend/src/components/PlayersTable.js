import React, { useRef } from "react";

import { useHistory } from "react-router-dom";

import { Table } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import "./PlayersTable.css";

const PlayersTable = ({ players }) => {
  const history = useHistory();

  const clickHandler = (e) => {
    console.log(e.target.dataset.value);
    const path = `/players/${e.target.dataset.value}`;
    history.push(path);
  };
  return (
    <Table striped bordered hover responsive size="sm">
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
          <tr
            key={player.player_id}
            onClick={clickHandler}
            data-value={player.player_id}
          >
            <td data-value={player.player_id}>
              <Image
                className="player-image"
                src={`http://127.0.0.1:8000${player.image}`}
              />
            </td>
            <td data-value={player.player_id}>
              {`${player.last_name} ${player.first_name} // ${player.player_team} // ${player.position}`}
            </td>
            <td data-value={player.player_id}></td>
            <td data-value={player.player_id}></td>
            <td data-value={player.player_id}>
              <strong>{player.points}</strong>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PlayersTable;
