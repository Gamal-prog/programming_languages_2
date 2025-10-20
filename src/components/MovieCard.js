import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchlist, removeFromWatchlist } from '../store/watchlistSlice';
import WatchlistButton from './WatchlistButton'; 
import './MovieCard.css';

const MovieCard = ({ movie, onClick, isCast = false }) => {
  const truncateText = (text, maxLength) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const cardClass = isCast ? 'movie-card cast-card' : 'movie-card';

  const dispatch = useDispatch();
  const watchlistItems = useSelector(state => state.watchlist.items);
  const isSaved = watchlistItems.some(item => item.id === movie.id);

  const handleToggleWatchlist = () => {
    if (isSaved) {
      dispatch(removeFromWatchlist(movie.id));
    } else {
      dispatch(addToWatchlist(movie));
    }
  };

  return (
    <div
      className={cardClass}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <img
        src={movie.poster || movie.image || movie.avatar || "https://via.placeholder.com/150"}
        alt={movie.title || movie.name || ""}
        className="movie-poster"
      />
      {isCast ? (
        <p className="cast-name">{movie.name || ""}</p>
      ) : (
        <div className="movie-info">
          <h3 className="movie-title-ca">{truncateText(movie.title || "", 18)}</h3>
          <div className="movie-meta">
            <span>{movie.releaseDate || ""}</span>
            <span className="rating">Rating: {movie.rating || ""}</span>
          </div>
        </div>
      )}

      {!isCast && (
        <WatchlistButton movie={movie} />
      )}
    </div>
  );
};

export default MovieCard;