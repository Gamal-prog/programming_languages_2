import React from 'react';
import './Modal.css';

export const Modal = ({ closeModal, trailerUrl, title }) => {
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal("Modal was closed");
        }
      }}
    >
      <div className="modal">
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="close-button" onClick={() => closeModal("Modal was closed")}>
            &#215;
          </button>
        </div>

        <div className="modal-content">
          <iframe
            src={trailerUrl}
            title="Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="trailer-iframe"
          ></iframe>
        </div>

        <div className="modal-footer">
          <button className="modal-button">Share</button>
        </div>
      </div>
    </div>
  );
};