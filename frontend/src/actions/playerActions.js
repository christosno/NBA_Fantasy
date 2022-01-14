import axios from "axios";
import {
  PLAYERS_LIST_FAIL,
  PLAYERS_LIST_REQUEST,
  PLAYERS_LIST_SUCCESS,
  PLAYERS_DETAILS_FAIL,
  PLAYERS_DETAILS_REQUEST,
  PLAYERS_DETAILS_SUCCESS,
} from "../constants/playerConstants";

export const listPlayers = () => async (dispatch) => {
  try {
    dispatch({ type: PLAYERS_LIST_REQUEST });

    const { data } = await axios.get("http://127.0.0.1:8000/api/players/");

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

export const detailPlayer = (id, season) => async (dispatch) => {
  try {
    dispatch({ type: PLAYERS_DETAILS_REQUEST });

    let playersTotalPages = [];

    const { data } = await axios.get(
      `https://www.balldontlie.io/api/v1/stats?seasons[]=${season}&player_ids[]=${id}`
    );

    // full data from first page
    const playerMatchesPage1 = [...data.data];

    // find the num of total pages
    const pagesNum = data["meta"]["total_pages"];

    // iterate from page 2 untillast date
    for (let i = 2; i <= pagesNum; i++) {
      const { data } = await axios.get(
        `https://www.balldontlie.io/api/v1/stats?seasons[]=${season}&player_ids[]=${id}&page=${i}`
      );

      playersTotalPages = [...playerMatchesPage1, ...data.data];

      // sort array by date
      playersTotalPages.sort((a, b) =>
        a.game.date > b.game.date ? 1 : b.game.date > a.game.date ? -1 : 0
      );
    }

    dispatch({
      type: PLAYERS_DETAILS_SUCCESS,
      payload: playersTotalPages,
    });

    // console.log(PlayersTotalPages);
  } catch (error) {
    console.log(error);
    dispatch({
      type: PLAYERS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
