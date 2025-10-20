// src/store/watchlistSlice.js
import { createSlice } from '@reduxjs/toolkit';

const getWatchlistFromStorage = (email) => {
  if (!email) return [];
  const stored = localStorage.getItem(`watchlist_${email}`);
  return stored ? JSON.parse(stored) : [];
};

const saveWatchlistToStorage = (email, items) => {
  if (!email) return;
  localStorage.setItem(`watchlist_${email}`, JSON.stringify(items));
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState: {
    items: [],
    email: null,
  },
  reducers: {
    addToWatchlist: (state, action) => {
      const movie = action.payload;
      if (!state.items.some(item => item.id === movie.id)) {
        state.items.push(movie);
        saveWatchlistToStorage(state.email, state.items);
      }
    },
    removeFromWatchlist: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveWatchlistToStorage(state.email, state.items);
    },
    setWatchlist: (state, action) => {
      state.items = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
      // Загружаем watchlist при смене email
      if (action.payload) {
        state.items = getWatchlistFromStorage(action.payload);
      } else {
        state.items = [];
      }
    },
  },
});

export const { addToWatchlist, removeFromWatchlist, setWatchlist, setEmail } = watchlistSlice.actions;
export default watchlistSlice.reducer;