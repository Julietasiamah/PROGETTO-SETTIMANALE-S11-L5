import { combineReducers, configureStore } from "@reduxjs/toolkit";
import FavReducer from "../reducers/FavReducer";

const rootReducer = combineReducers({
  favourites: FavReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
