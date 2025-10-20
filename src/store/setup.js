// src/store/setup.js
import { store } from './index';
import { loginSuccess, logout } from './authSlice';
import { setEmail, setWatchlist } from '../store/watchlistSlice';

// Инициализация при загрузке приложения
export const initializeAuth = () => {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    const user = JSON.parse(storedUser);
    store.dispatch(loginSuccess(user));
    store.dispatch(setEmail(user.email));
    const watchlist = localStorage.getItem(`watchlist_${user.email}`);
    if (watchlist) {
      store.dispatch(setWatchlist(JSON.parse(watchlist)));
    }
  } else {
    store.dispatch(logout());
  }
};