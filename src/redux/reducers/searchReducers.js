import { FETCH_SEARCH_RESULTS_SUCCESS, SET_SEARCH_QUERY } from "../actions";

const initialState = {
  query: " ",
  results: [],
};

const searchReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return { ...state, results: action.payload };

    case FETCH_SEARCH_RESULTS_SUCCESS:
      return { ...state, results: action.payload };

    default:
      return state;
  }
};
export default searchReducers;
