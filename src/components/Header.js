import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">

        <div className="header-left"> 
            <div className="logo">
                <span>MOVIX</span>
            </div>

            <nav className="nav-menu">
                <ul>
                    <li><a href="#tvshows">TV Shows</a></li>
                    <li><a href="#movies">Movies</a></li>
                </ul>
            </nav>
        </div>

        <div className="header-right">
          <div className="search-box">
            <input type="text" placeholder="Search here..." />
            <button className="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </button>
          </div>

          <div className="user-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.289 0-3.516.68-4.168 1.32-.678.678-.83 1.418-.832 1.664v.004z"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;