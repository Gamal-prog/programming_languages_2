import React, { useState } from 'react';
import './Banner.css';

const Banner = () => {

  const banners = [
    {
      id: 1,
      title: "Corrective Measures",
      description: "Set in San Tiburon, the world's most dangerous maximum-security penitentiary and home to the world's most treacherous superpowered criminals, where tensions among the inmates and staff heighten, leading to anarchy that engulfs the prison and order is turned upside down.",
      rating: "5.3+",
      views: 8900,
      image: "https://image.tmdb.org/t/p/original/aHFq9NMhavOL0jtQvmHQ1c5e0ya.jpg",
    },
    {
      id: 2,
      title: "Iron Man",
      description: "Tony Stark. Genius, billionaire, playboy, philanthropist. After being held captive in an Afghan cave, Tony creates a unique suit of armor...",
      rating: "8.0+",
      views: 12300,
      image: "https://www.themoviedb.org/t/p/original/cyecB7godJ6kNHGONFjUyVN9OX5.jpg", //x1ZKRyvB7QAXfYVgf5mUJzjPqfH.jpg
    },
    {
      id: 3,
      title: "Ghostbusters: Frozen Empire",
      description: "After the original team developed a top-secret research laboratory to take the shattered ghosts to the next level. But when the discovery of an ancient artifact unleashes a...",
      rating: "6.7+",
      views: 2450,
      image: "https://www.themoviedb.org/t/p/w1280/5cCfqeUH2f5Gnu7Lh9xepY9TB6x.jpg",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const currentBanner = banners[currentIndex];

  return (
    <div className="banner-container">
      <div
        className="banner-background"
        style={{ backgroundImage: `url(${currentBanner.image})` }}
      >

        <div className="gradient-overlay"></div>
        <div className="banner-content">
          <h1 className="banner-title">{currentBanner.title}</h1>
          <p className="banner-description">{currentBanner.description}</p>
          <div className="banner-meta">
            <span>Rating: {currentBanner.rating}</span>
            <span>|</span>
            <span>View: {currentBanner.views}</span>
          </div>
          <button className="play-button">Info</button>
        </div>

        <button className="nav-button prev" onClick={handlePrev}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
            </svg>
          </span>
        </button>
        <button className="nav-button next" onClick={handleNext}>
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

export default Banner;