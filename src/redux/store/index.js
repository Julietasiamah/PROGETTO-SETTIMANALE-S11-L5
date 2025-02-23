import { combineReducers, configureStore } from "@reduxjs/toolkit";
import FavReducer from "../reducers/FavReducer";
import playerSongReducer from "../reducers/playerSongReducer";
import searchReducers from "../reducers/searchReducers";

const rootReducer = combineReducers({
  favourites: FavReducer,
  selectedSong: playerSongReducer,
  search: searchReducers,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
