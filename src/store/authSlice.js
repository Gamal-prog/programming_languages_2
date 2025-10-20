// src/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { users } from '../data/users';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: true,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
      localStorage.removeItem('user');
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { loginSuccess, loginFailure, logout, setLoading } = authSlice.actions;

// Асинхронный экшен (middleware-style)
export const login = (email, password) => (dispatch) => {
  dispatch(setLoading(true));
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    // Убираем пароль из состояния
    const safeUser = { id: user.id, email: user.email };
    dispatch(loginSuccess(safeUser));
  } else {
    dispatch(loginFailure('Неверный email или пароль'));
  }
};

export const register = (email, password) => (dispatch) => {
  // Проверяем, не занят ли email
  const exists = users.some(u => u.email === email);
  if (exists) {
    dispatch(loginFailure('Email уже зарегистрирован'));
    return;
  }

  // Добавляем в "базу"
  const newUser = { id: users.length + 1, email, password };
  users.push(newUser);

  const safeUser = { id: newUser.id, email: newUser.email };
  dispatch(loginSuccess(safeUser));
};

export default authSlice.reducer;