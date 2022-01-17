import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Row, Col } from "react-bootstrap";

import "./HomeScreen.css";

import PlayersTable from "../components/PlayersTable";
import Loader from "../components/Loader";
import Message from "../components/Message";

import { listPlayers } from "../actions/playerActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const playerList = useSelector((state) => state.playerList);
  console.log(playerList);
  const { error, loading, players } = playerList;

  useEffect(() => {
    dispatch(listPlayers());
  }, [dispatch]);

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
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <PlayersTable players={players} />
          )}
        </Col>
      </Row>
    </Fragment>
  );
};

export default HomeScreen;
