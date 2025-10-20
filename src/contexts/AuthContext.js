// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login as loginAction, logout as logoutAction } from '../store/authSlice';
import { setWatchlist, setEmail } from '../store/watchlistSlice';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      // Устанавливаем email в watchlist
      dispatch(setEmail(parsedUser.email));
      // Загружаем watchlist из localStorage
      const storedWatchlist = localStorage.getItem(`watchlist_${parsedUser.email}`);
      if (storedWatchlist) {
        dispatch(setWatchlist(JSON.parse(storedWatchlist)));
      }
    }
    setLoading(false);
  }, [dispatch]);

  const login = (email) => {
    const userData = { email, id: Date.now() };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    dispatch(loginAction(userData));
    dispatch(setEmail(email));
    // Загружаем watchlist
    const storedWatchlist = localStorage.getItem(`watchlist_${email}`);
    if (storedWatchlist) {
      dispatch(setWatchlist(JSON.parse(storedWatchlist)));
    }
  };

  const register = (email) => {
    login(email); // Регистрация = вход
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    dispatch(logoutAction());
    dispatch(setEmail(null));
    dispatch(setWatchlist([]));
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};