import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Логотип */}
        <div className="footer-logo">
          <h1>MOVIX</h1>
          <button className="join-button">ВСТУПИТЬ В СООБЩЕСТВО</button>
        </div>

        {/* Колонки */}
        <div className="footer-columns">
          {/* Колонка 1: Главное */}
          <div className="footer-column">
            <h3 className="column-title">ГЛАВНОЕ</h3>
            <ul>
              <li><a href="#about">О MOVIX</a></li>
              <li><a href="#contact">Связаться с нами</a></li>
              <li><a href="#support">Форумы поддержки</a></li>
              <li><a href="#api">API Documentation</a></li>
              <li><a href="#status">Статус системы</a></li>
            </ul>
          </div>

          {/* Колонка 2: Участвуйте */}
          <div className="footer-column">
            <h3 className="column-title">УЧАСТВУЙТЕ</h3>
            <ul>
              <li><a href="#editors">Библия редакторов</a></li>
              <li><a href="#add-movie">Добавить новый фильм</a></li>
              <li><a href="#add-series">Добавить новый сериал</a></li>
            </ul>
          </div>

          {/* Колонка 3: Сообщество */}
          <div className="footer-column">
            <h3 className="column-title">СООБЩЕСТВО</h3>
            <ul>
              <li><a href="#guides">Руководства</a></li>
              <li><a href="#discussions">Обсуждения</a></li>
              <li><a href="#boards">Доска почёта</a></li>
            </ul>
          </div>

          {/* Колонка 4: О праве */}
          <div className="footer-column">
            <h3 className="column-title">О ПРАВЕ</h3>
            <ul>
              <li><a href="#terms">Условия использования</a></li>
              <li><a href="#api-terms">API Правила использования</a></li>
              <li><a href="#privacy">Политика конфиденциальности</a></li>
              <li><a href="#dmca">DMCA Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;