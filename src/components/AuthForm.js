// src/components/AuthForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../store/authSlice';
import './AuthForm.css';

const AuthForm = ({ isLogin, onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (isLogin) {
      dispatch(login(email, password));
    } else {
      dispatch(register(email, password));
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>{isLogin ? 'Вход' : 'Регистрация'}</h2>

      {error && <p className="error">{error}</p>}

      <div className="form-group">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {!isLogin && (
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
      )}

      <button type="submit" className="auth-button">
        {isLogin ? 'Войти' : 'Зарегистрироваться'}
      </button>

      <p className="switch-mode">
        {isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}
        <button type="button" className="switch-link" onClick={onSwitch}>
          {isLogin ? 'Регистрация' : 'Вход'}
        </button>
      </p>
    </form>
  );
};

export default AuthForm;