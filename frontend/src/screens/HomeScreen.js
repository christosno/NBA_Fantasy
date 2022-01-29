import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import { Row, Col } from "react-bootstrap";

import "./HomeScreen.css";

import PlayersTable from "../components/PlayersTable";
import { sortPlayersBy } from "../utils/sortPlayersBy";

// import PlayerWithBestRating from "../components/PlayerWithBestRating";

const HomeScreen = () => {
  const playerList = useSelector((state) => state.playerList);
  console.log(playerList);
  const { players } = playerList;

  // sort player by avg index rating
  const sortedPlayers = sortPlayersBy(players, "avg_intex_rating");

  const firstBestEightPlayers = sortedPlayers.slice(0, 8);

  return (
    <Fragment>
      <Row>
        <Col className="my-2 p-3" xl="6">
          <Row className="my-2 p-3 left-div-first-row">
            {/* player team */}
            <h3>My Team</h3>
          </Row>
          <Row className="my-2 p-3 left-div-second-row">
            {/* teams table */}
            <h3>League Table</h3>
          </Row>
        </Col>
        <Col className="my-2 p-3 players-table" xl="6">
          {/* <PlayerWithBestRating player={players[0]} /> */}
          <h3 className="my-2 p-3">Best Players</h3>
          <PlayersTable players={firstBestEightPlayers} />
        </Col>
      </Row>
    </Fragment>
  );
};

export default HomeScreen;
