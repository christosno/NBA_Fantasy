import React from "react";
import { Table } from "react-bootstrap";

const PlayersAvgStats = ({ player }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Season</th>
          <th>G</th>
          <th>PTS</th>
          <th>TRB</th>
          <th>AST</th>
          <th>Blog</th>
          <th>STL</th>
          <th>TR</th>
          <th>FG%</th>
          <th>FG3%</th>
          <th>FT%</th>
          <th>VAL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>{player.games_played}</td>
          <td>{player.points}</td>
          <td>{player.rebound}</td>
          <td>{player.assist}</td>
          <td>{player.block}</td>
          <td>{player.steal}</td>
          <td>{player.turnover}</td>
          <td>{(player.fg_pct * 100).toFixed(1)}</td>
          <td>{(player.fg3_pct * 100).toFixed(1)}</td>
          <td>{(player.ft_pct * 100).toFixed(1)}</td>
          <td>{player.total_points}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default PlayersAvgStats;
