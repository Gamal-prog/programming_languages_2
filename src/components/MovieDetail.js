import React from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetail.css';
import MovieCard from './MovieCard';

import banners from '../data/banners.json';
import topRatedMovies from '../data/topRatedMovies.json';
import trendingMovies from '../data/trendingMovies.json';

const allMovies = [...banners, ...topRatedMovies, ...trendingMovies];

const MovieDetail = () => {
  const { id } = useParams();
  const movieId = parseInt(id, 10);
  const movie = allMovies.find(m => m.id === movieId);

  if (!movie) {
    return (
      <div className="movie-detail">
        <div className="loading">Movie not found</div>
      </div>
    );
  }

  const cast = movie.cast || [];
  const tagline = movie.tagline || '';
  const overview = movie.overview || movie.description || 'No overview available.';
  const duration = movie.duration || 'Unknown';
  const status = movie.status || 'Unknown';
  const releaseDate = movie.releaseDate || 'Unknown';
  const revenue = movie.revenue ? `$${movie.revenue}` : 'N/A';
  const director = movie.director || 'Unknown';
  const writer = movie.writer || 'Unknown';
  const backdrop = movie.backdrop;
  const poster = movie.poster || movie.image;

  return (
    <div className="movie-detail">
      <div
        className="movie-backdrop"
        style={{ backgroundImage: `url(${backdrop})` }}
      >
        <div className="backdrop-overlay"></div>

      </div>

      <div className="movie-content">
        <div className="movie-poster-section">
          <img src={poster} alt={movie.title} className="movie-poster" />
          <button className="play-now-button">Play Now</button>
        </div>

        <div className="movie-info">
          <h1 className="movie-title">{movie.title}</h1>
          {tagline && <p className="movie-tagline">{tagline}</p>}

          <div className="movie-stats">
            <span>Rating: {movie.rating}+</span>
            <span>|</span>
            <span>View: {movie.views || 0}</span>
            <span>|</span>
            <span>Duration: {duration}</span>
          </div>

          <div className="section">
            <h3>Overview</h3>
            <p>{overview}</p>
          </div>

          <div className="movie-meta">
            <div><strong>Status:</strong> {status}</div>
            <div><strong>Release Date:</strong> {releaseDate}</div>
            <div><strong>Revenue:</strong> {revenue}</div>
          </div>

          <div className="movie-crew">
            <div><strong>Director:</strong> {director}</div>
            <div><strong>Writer:</strong> {writer}</div>
          </div>

          {cast.length > 0 && (
            <div className="cast-section">
              <h3>Cast:</h3>
              <div className="cast-grid">
                {cast.map((actor) => (
                  <MovieCard
                    key={actor.id || actor.name}
                    movie={actor}
                    isCast={true} 
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;