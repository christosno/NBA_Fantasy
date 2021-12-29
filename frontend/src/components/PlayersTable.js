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
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <tr key={player.id}>
            <td>{player.id}</td>
            <td>{`${player.last_name} ${player.first_name}`}</td>
            <td>{player.team.full_name}</td>
            <td>{player.position}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PlayersTable;
