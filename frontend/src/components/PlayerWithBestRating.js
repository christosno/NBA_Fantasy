import React from "react";

import { Card, Image, Col, Row } from "react-bootstrap";

const PlayerWithBestRating = ({ player }) => {
  return (
    <Card>
      <Card.Header>Best Player Rating</Card.Header>
      <Row>
        <Col xl="4">
          <Image
            style={{ height: "130px" }}
            className="img-fluid"
            variant="bottom"
            src={`http://127.0.0.1:8000${player.image}`}
          />
        </Col>
        <Col xl="8">
          <Card.Body>
            <Card.Title
              style={{ textAlign: "center" }}
            >{`${player.last_name} ${player.first_name}`}</Card.Title>
            <Card.Text>
              <Row>
                <Col>
                  <p>Team: {player.player_team}</p>
                  <p>Position: {player.position}</p>
                  {/* <p>Height: {`${player.height} feet`}</p> */}
                </Col>
                <Col>
                  <p>Avg Rating: {player.avg_intex_rating}</p>
                  <p>Points: {player.points}</p>
                  {/* <p>Games: {player.games_played}</p> */}
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
    // <Card style={{ width: "18rem" }}>
    //   <Row>
    //     <Col className="my-2 p-3">
    //       <Image
    //         // style={{ height: "110px" }}
    //         className="img-fluid"
    //         variant="bottom"
    //         src={`http://127.0.0.1:8000${player.image}`}
    //       />
    //     </Col>
    //     <Col>
    //       <Card.Body>
    //         <Col>
    //           <Card.Title>{`${player.last_name} ${player.first_name}`}</Card.Title>
    //           <p>Team: {player.player_team}</p>
    //           <p>Position: {player.position}</p>
    //           <p>Height: {`${player.height} feet`}</p>
    //           <p>Weight: {`${player.weight} pounds`}</p>
    //         </Col>
    //         <Col>
    //           <Card.Text>
    //             <p>
    //               Avg Rating: <strong>{player.avg_intex_rating}</strong>
    //             </p>
    //             <p>Poinrs: {player.points}</p>
    //           </Card.Text>
    //         </Col>
    //       </Card.Body>
    //     </Col>
    //   </Row>
    // </Card>
  );
};

export default PlayerWithBestRating;
