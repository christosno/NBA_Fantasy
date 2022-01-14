import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { detailPlayer } from "../actions/playerActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";

import PlayerStatsTable from "../components/PlayerStatsTable";

const PlayerStats = () => {
  const playerMatches = useSelector((state) => state.playerDetails);
  const { loading, error, player } = playerMatches;
  console.log(playerMatches);
  console.log("Player", player);
  const params = useParams();
  const season = 2021;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect run");
    dispatch(detailPlayer(params.playerId, season));
  }, [dispatch]);

  return (
    <div>
      {loading && <Loader />}
      {!loading && error && <Message variant="danger">{error}</Message>}
      {!loading && !error && player.length > 0 && (
        <PlayerStatsTable matches={player} />
      )}
    </div>
  );
};

export default PlayerStats;

// {player[0].player.last_name}
