import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import { Table } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import "./PlayersTable.css";

import { sortPlayersBy } from "../utils/sortPlayersBy";

const PlayersTable = ({ players }) => {
  const history = useHistory();
  const [sortedPlayers, setSortedPlayers] = useState(players);

  const clickHandler = (e) => {
    console.log(e.target.dataset.value);
    const path = `/players/${e.target.dataset.value}`;
    history.push(path);
  };

  const sortByGames = () => {
    const sortPlayersByGame = sortPlayersBy(sortedPlayers, "games_played");
    setSortedPlayers(sortPlayersByGame);
  };

  const sortByRating = () => {
    const sortPlayersByRating = sortPlayersBy(
      sortedPlayers,
      "avg_intex_rating"
    );
    setSortedPlayers(sortPlayersByRating);
  };

  const sortByPoints = () => {
    const sortPlayersByPoints = sortPlayersBy(sortedPlayers, "points");
    setSortedPlayers(sortPlayersByPoints);
  };
  return (
    <Table striped bordered hover responsive size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name // Team // Pos</th>
          <th onClick={sortByGames} className="table-head__games">
            Games
          </th>
          <th onClick={sortByRating} className="table-head__rating">
            Rating
          </th>
          <th onClick={sortByPoints} className="table-head__points">
            Points
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedPlayers.map((player) => (
          <tr
            className="player-row"
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
            <td data-value={player.player_id}>{player.games_played}</td>
            <td data-value={player.player_id}>{player.avg_intex_rating}</td>
            <td data-value={player.player_id}>{player.points}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PlayersTable;
