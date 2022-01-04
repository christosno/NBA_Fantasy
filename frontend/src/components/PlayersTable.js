import React from "react";
import { Table } from "react-bootstrap";

const PlayersTable = ({ players }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Team</th>
          <th>Position</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <tr key={player.player_id}>
            <td>{player.player_id}</td>
            <td>{`${player.last_name} ${player.first_name}`}</td>
            <td>{player.player_team}</td>
            <td>{player.position}</td>
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
