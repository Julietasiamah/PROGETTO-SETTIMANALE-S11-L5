import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions";

const initialState = {
  content: JSON.parse(localStorage.getItem("favourites")) || [],
};

const FavReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES: {
      if (state.content.some((song) => song.id === action.payload.id)) return state;
      const updatedFavs = [...state.content, action.payload];
      localStorage.setItem("favourites", JSON.stringify(updatedFavs)); // Salva su localStorage
      return {
        ...state,
        content: updatedFavs,
      };
    }

    case REMOVE_FROM_FAVOURITES: {
      const filteredFavs = state.content.filter((song) => song.id !== action.payload);
      localStorage.setItem("favourites", JSON.stringify(filteredFavs)); // Aggiorna localStorage
      return {
        ...state,
        content: filteredFavs,
      };
    }

    default:
      return state;
  }
};

export default FavReducer;
