import {createSlice} from '@reduxjs/toolkit';
import {saveFavoritesToStorage} from '../../utils/favourites';

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const {id, carDetails, image} = action.payload;
      // Check if the item already exists in favorites
      const isDuplicate = state.favorites.some(item => item.id === id);
      if (!isDuplicate) {
        state.favorites.push({id, carDetails, image});
        saveFavoritesToStorage(state.favorites);
      }
    },

    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload,
      );
      saveFavoritesToStorage(state.favorites);
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

export const {addToFavorites, removeFromFavorites, setFavorites} =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
