import { SET_SELECTED_SONG } from "../actions";
const initialState = {
  content: {},
};
const playerSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_SONG:
      return action.payload;
    default:
      return state;
  }
};

export default playerSongReducer;
