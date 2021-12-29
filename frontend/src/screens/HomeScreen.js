import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import PlayersTable from "../components/PlayersTable";

const HomeScreen = ({ players }) => {
  return (
    <Fragment>
      <Row>
        <Col>
          <h1>My Team</h1>
        </Col>
        <Col className="my-3 p-3">
          <PlayersTable players={players} />
        </Col>
      </Row>
    </Fragment>
  );
};

export default HomeScreen;
