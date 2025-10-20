// src/pages/ProfilePage.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const user = useSelector(state => state.auth.user);
  const watchlist = useSelector(state => state.watchlist.items);
  const navigate = useNavigate();

  if (!user) {
    navigate('/auth');
    return null;
  }

  // Генерация инициалов из email
  const getInitials = (email) => {
    const parts = email.split('@')[0].split('.');
    return parts.map(part => part[0].toUpperCase()).join('');
  };

  const initials = getInitials(user.email);

  // Заглушка для статистики
  const stats = {
    avgMovieRating: 0,
    avgTVRating: 0,
    joinedDate: new Date().toLocaleString('ru-RU', { month: 'long', year: 'numeric' })
  };

  return (
    <div className="profile-page">
      {/* Баннер */}
      <div className="profile-banner">
        <div className="profile-header">
          <div className="avatar-circle">{initials}</div>
          <div className="profile-info">
            <h1>{user.email}</h1>
            <p>Участвует с {stats.joinedDate}</p>
          </div>
          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-value">0%</span>
              <span className="stat-label"> Средний рейтинг фильма</span>
            </div>
            <div className="stat-separator">|</div>
            <div className="stat-item">
              <span className="stat-value">0%</span>
              <span className="stat-label"> Средний рейтинг ТВ шоу</span>
            </div>
          </div>
        </div>
      </div>

      {/* Навигация по вкладкам */}
      <div className="profile-tabs">
        <Link to="/profile" className="tab-link active">Обзор</Link>
        <Link to="/profile/discussions" className="tab-link">Обсуждения</Link>
        <Link to="/profile/lists" className="tab-link">Списки</Link>
        <Link to="/profile/ratings" className="tab-link">Рейтинги</Link>
        <Link to="/profile/watchlist" className="tab-link">Список отслеживания</Link>
      </div>

      {/* Контент: Список отслеживания */}
      <div className="profile-content">
        <div className="section-header">
          <h2>Мой список отслеживания</h2>
          <div className="filters">
            <span>Фильмы <strong>{ watchlist.length }</strong></span>
            <span>ТВ <strong>0</strong></span>
          </div>
          <div className="sort-options">
            <span>Фильтровать по: <strong>Дата добавления</strong></span>
            <span> Порядок: <strong>&darr;</strong></span>
          </div>
        </div>

        {watchlist.length === 0 ? (
          <p>Вы пока ничего не добавили в избранное.</p>
        ) : (
          <div className="watchlist-grid">
            {watchlist.map(movie => (
              <div key={movie.id} className="watchlist-card">
                <img
                  src={movie.poster || movie.image}
                  alt={movie.title}
                  className="watchlist-poster"
                />
                <div className="watchlist-info">
                  <h3>{movie.title}</h3>
                  <p>{movie.releaseDate || 'Unknown'}</p>
                  <div className="watchlist-actions">
                    <button className="action-button">Оценить!</button>
                    <button className="action-button">Избранное</button>
                    <button className="action-button">Добавить в список</button>
                    <button className="action-button">Удалить</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;