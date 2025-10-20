// src/pages/AuthPage.js
import React, { useState } from 'react'; 
import { useAuth } from '../contexts/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../store/authSlice';
import './AuthPage.css';

const AuthPage = () => {
  const dispatch = useDispatch();
  const { login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { user } = useSelector(state => state.auth);

  React.useEffect(() => {
    if (user) {
      navigate('/profile');
    }
  }, [user, navigate]);

  const handleAuth = (email, password) => {
    if (isLogin) {
      dispatch(login(email, password));
    } else {
      dispatch(register(email, password));
    }
  };

  return (
    <div className="auth-page">
      <AuthForm
        isLogin={isLogin}
        onSwitch={() => setIsLogin(!isLogin)}
        onSubmit={handleAuth}
      />
    </div>
  );
};

export default AuthPage;