export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export const FETCH_SEARCH_RESULTS_SUCCESS = "FETCH_SEARCH_RESULTS_SUCCESS";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SET_SELECTED_SONG = "SET_SELECTED_SONG";
export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

export const fetchSearchResultsSuccess = (results) => ({
  type: FETCH_SEARCH_RESULTS_SUCCESS,
  payload: results,
});

export const addToFavouritesAction = (song) => ({
  type: ADD_TO_FAVOURITES,
  payload: song,
});
export const removeFromFavouritesAction = (songId) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: songId,
});

export const setSelectedSongsAction = (song) => ({
  type: SET_SELECTED_SONG,
  payload: song,
});
