import React from "react";

import { Table } from "react-bootstrap";

import "./PlayerStatsTable.css";

const PlayerStatsTable = ({ matches }) => {
  return (
    <div className="players-stats-table">
      <Table striped bordered hover responsive size="sm">
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
          {matches.slice(-15).map((match) => (
            <tr key={match.id}>
              <td></td>
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
    </div>
  );
};

export default PlayerStatsTable;
