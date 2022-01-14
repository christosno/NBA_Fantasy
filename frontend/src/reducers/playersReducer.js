import {
  PLAYERS_LIST_FAIL,
  PLAYERS_LIST_REQUEST,
  PLAYERS_LIST_SUCCESS,
  PLAYERS_DETAILS_FAIL,
  PLAYERS_DETAILS_REQUEST,
  PLAYERS_DETAILS_SUCCESS,
} from "../constants/playerConstants";

export const playerListReducer = (state = { players: [] }, action) => {
  switch (action.type) {
    case PLAYERS_LIST_REQUEST:
      return { loading: true, players: [] };

    case PLAYERS_LIST_SUCCESS:
      return { loading: false, players: action.payload };

    case PLAYERS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const playerDetailsReducer = (state = { player: [] }, action) => {
  switch (action.type) {
    case PLAYERS_DETAILS_REQUEST:
      console.log("request");
      return { loading: true, player: [] };
    case PLAYERS_DETAILS_SUCCESS:
      return { loading: false, player: action.payload };
    case PLAYERS_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
