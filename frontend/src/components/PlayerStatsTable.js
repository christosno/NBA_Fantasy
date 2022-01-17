import React from "react";

import { Table } from "react-bootstrap";

import "./PlayerStatsTable.css";

const PlayerStatsTable = ({ matches }) => {
  return (
    <div className="players-stats-table">
      <Table striped bordered hover responsive size="sm">
        <thead>
          <tr>
            <th>Date</th>
            <th>Pts</th>
            <th>Ast</th>
            <th>Fg %</th>
            <th>Reb</th>
            <th>Stl</th>
            <th>TOver</th>
          </tr>
        </thead>
        <tbody>
          {matches.slice(-15).map((match) => (
            <tr key={match.id}>
              <td>{match.game.date.split("T")[0]}</td>

              <td>
                <strong>{match.pts}</strong>
              </td>
              <td>{match.ast}</td>
              <td>{match.fg_pct}</td>
              <td>{match.reb}</td>
              <td>{match.stl}</td>
              <td>{match.turnover}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PlayerStatsTable;
