import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import { detailPlayer } from "../actions/playerActions";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader";
import Message from "../components/Message";
import PlayerStatsTable from "../components/PlayerStatsTable";
import PlayersAvgStats from "../components/PlayersAvgStats";
import PlayerGeneralInfo from "../components/PlayerGeneralInfo";

import "./PlayerStats.css";

const PlayerStats = () => {
  const params = useParams();
  const season = 2021;
  const dispatch = useDispatch();

  // retreve player info
  const totalPlayersInfo = useSelector((state) => state.playerList);
  const {
    loading: playersInfoLoading,
    error: playersInfoError,
    players: playersInfo,
  } = totalPlayersInfo;

  // find the player with the specific id
  const [playerInfo] = playersInfo.filter(
    (player) => player.player_id === params.playerId
  );

  // retrive all matches for player
  const playerMatches = useSelector((state) => state.playerDetails);
  const { loading, error, player } = playerMatches;

  useEffect(() => {
    console.log("useEffect run");
    dispatch(detailPlayer(params.playerId, season));
  }, [dispatch]);

  return (
    <Fragment>
      <Row>
        {playersInfoLoading && <Loader />}
        {!playersInfoLoading && playersInfoError && (
          <Message variant="danger">{error}</Message>
        )}
        {!playersInfoLoading && !playersInfoError && playersInfo && (
          <Col className="my-3 p-3" xl="6">
            <Row className="my-3 p-3">
              <Col className="player-info-img-btn" xl="6">
                <Image
                  className="player-info-img"
                  src={`http://127.0.0.1:8000${playerInfo.image}`}
                />
              </Col>
              <Col className="player-info-gen" xl="6">
                <PlayerGeneralInfo
                  className="player-info-gen-info"
                  player={playerInfo}
                />
              </Col>
            </Row>
            <Row className="my-3 p-3">
              <PlayersAvgStats player={playerInfo} />
            </Row>
            <Row className="my-3 p-3">Player Chart</Row>
          </Col>
        )}

        <Col className="my-3 p-3" xl="6">
          {loading && <Loader />}
          {!loading && error && <Message variant="danger">{error}</Message>}
          {!loading && !error && player.length > 0 && (
            <PlayerStatsTable matches={player} />
          )}
        </Col>
      </Row>
    </Fragment>
  );
};

export default PlayerStats;

// {player[0].player.last_name}
