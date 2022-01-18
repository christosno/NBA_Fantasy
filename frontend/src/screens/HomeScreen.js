import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import { Row, Col } from "react-bootstrap";

import "./HomeScreen.css";

import PlayersTable from "../components/PlayersTable";

const HomeScreen = () => {
  const playerList = useSelector((state) => state.playerList);
  console.log(playerList);
  const { players } = playerList;

  return (
    <Fragment>
      <Row>
        <Col className="my-2 p-3" xl="6">
          <Row className="my-2 p-3 left-div-first-row">
            {/* player team */}
            <h1>My Team</h1>
          </Row>
          <Row className="my-2 p-3 left-div-second-row">
            {/* teams table */}
            <h1>League Table</h1>
          </Row>
        </Col>
        <Col className="my-2 p-3" xl="6">
          <h1>Best Players Rating</h1>
          <PlayersTable players={players} />
        </Col>
      </Row>
    </Fragment>
  );
};

export default HomeScreen;
