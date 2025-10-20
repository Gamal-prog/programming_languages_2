// src/pages/WatchlistPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import './WatchlistPage.css';
import MovieCard from '../components/MovieCard';

const WatchlistPage = () => {
  const watchlist = useSelector(state => state.watchlist.items); // 👈 берём из Redux

  return (
    <div className="watchlist-page">
      <h1>Мой список отслеживания</h1>

      {watchlist.length === 0 ? (
        <p>Вы пока ничего не добавили в избранное.</p>
      ) : (
        <div className="watchlist-grid">
          {watchlist.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchlistPage;