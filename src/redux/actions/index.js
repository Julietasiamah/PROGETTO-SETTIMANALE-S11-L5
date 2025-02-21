export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export const FETCH_SEARCH_RESULTS_SUCCESS = "FETCH_SEARCH_RESULTS_SUCCESS";

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

export const fetchSearchResultsSuccess = (results) => ({
  type: FETCH_SEARCH_RESULTS_SUCCESS,
  payload: results,
});
