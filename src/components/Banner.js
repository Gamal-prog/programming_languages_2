import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); 

  useEffect(() => {
    if (banners.length === 0) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % banners.length);
        setFade(true);
      }, 800); 
    }, 5000); 

    return () => clearInterval(interval);
  }, [banners.length]);

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(prev => (prev === 0 ? banners.length - 1 : prev - 1));
      setFade(true);
    }, 300);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(prev => (prev === banners.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 300);
  };

  const currentBanner = banners[currentIndex];

  return (
    <div className="banner-container">
      <div
        className={`banner-background ${fade ? 'fade-in' : 'fade-out'}`}
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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
            </svg>
          </span>
        </button>
        <button className="nav-button next" onClick={handleNext}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Banner;