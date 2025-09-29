import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieSlider.css';
import MovieCard from './MovieCard';

const MovieSlider = ({ title, movies }) => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollSlider(-1);
    }
  };

  const handleNext = () => {
    if (currentIndex < movies.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollSlider(1);
    }
  };

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const cardWidth = 220; 
      const scrollAmount = direction * cardWidth;
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleCardClick = (movieId) => {
    navigate(`/movie/${movieId}`); 
  };

  return (
    <div className="movie-slider">
      <h2 className="slider-title">{ title }</h2>

      <div className="slider-controls">
        <button className="nav-button prev" onClick={handlePrev} disabled={currentIndex === 0}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
            </svg>
          </span>
        </button>

        <div className="movies-container" ref={sliderRef}>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={() => handleCardClick(movie.id)}
            />
          ))}
        </div>

        <button className="nav-button next" onClick={handleNext} disabled={currentIndex >= movies.length - 1}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default MovieSlider;