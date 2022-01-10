import axios from "axios";
import {
  PLAYERS_LIST_FAIL,
  PLAYERS_LIST_REQUEST,
  PLAYERS_LIST_SUCCESS,
} from "../constants/playerConstants";

export const listPlayers = () => async (dispatch) => {
  try {
    dispatch({ type: PLAYERS_LIST_REQUEST });

    const { data } = await axios.get("/api/players/");

    dispatch({ type: PLAYERS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PLAYERS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
