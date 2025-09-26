import React, { useState, useRef } from 'react';
import './MovieSlider.css';

const MovieSlider = ({ title, movies }) => {
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
            <div key={movie.id} className="movie-card">
              <img src={movie.poster} alt={movie.title} className="movie-poster" />
              <div className="movie-info">
                <h3 className="movie-title">{truncateText(movie.title, 18)}</h3>
                <div className="movie-meta">
                  <span>{movie.releaseDate}</span>
                  <span className="rating">Rating: {movie.rating}</span>
                </div>
              </div>
            </div>
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

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

export default MovieSlider;