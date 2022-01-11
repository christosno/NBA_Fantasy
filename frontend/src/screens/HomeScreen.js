import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Row, Col } from "react-bootstrap";

import PlayersTable from "../components/PlayersTable";
import Loader from "../components/Loader";
import Message from "../components/Message";

import { listPlayers } from "../actions/playerActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const playerList = useSelector((state) => state.playerList);
  const { error, loading, players } = playerList;

  useEffect(() => {
    dispatch(listPlayers());
  }, [dispatch]);

  return (
    <Fragment>
      <Row>
        <Col xl="8">
          <h1>My Team</h1>
        </Col>
        <Col className="my-3 p-3" xl="4">
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
