import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, onClick, isCast = false }) => {
  const truncateText = (text, maxLength) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const cardClass = isCast ? 'movie-card cast-card' : 'movie-card';

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
          <h3 className="movie-title">{truncateText(movie.title || "", 18)}</h3>
          <div className="movie-meta">
            <span>{movie.releaseDate || ""}</span>
            <span className="rating">Rating: {movie.rating || ""}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;