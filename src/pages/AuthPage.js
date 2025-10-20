// src/pages/AuthPage.js
import React, { useState } from 'react'; 
import { useAuth } from '../contexts/AuthContext';
import AuthForm from '../components/AuthForm';
import './AuthPage.css';

const AuthPage = () => {
  const { login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = (email) => {
    if (isLogin) {
      login(email);
    } else {
      register(email);
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