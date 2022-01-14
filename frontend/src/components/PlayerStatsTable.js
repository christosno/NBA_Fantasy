import React from "react";

import { Table } from "react-bootstrap";

const PlayerStatsTable = ({ matches }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>#</th>
          <th>#</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {matches.map((match) => (
          <tr key={match.id}>
            <td>
              {/* <Image
                className="player-image"
                src={`http://127.0.0.1:8000${player.image}`}
              /> */}
            </td>
            <td>{match.game.date.split("T")[0]}</td>
            <td></td>
            <td></td>
            <td>
              <strong>{match.pts}</strong>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PlayerStatsTable;
