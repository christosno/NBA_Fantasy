import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { detailPlayer } from "../actions/playerActions";
import { useDispatch, useSelector } from "react-redux";

const PlayerStats = () => {
  const playerMatches = useSelector((state) => state.playerDetails.matches);
  console.log(playerMatches);
  const params = useParams();
  const season = 2021;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailPlayer(params.playerId, season));
  }, []);

  return <div>HihIHIHIHIIHIHI</div>;
};

export default PlayerStats;
