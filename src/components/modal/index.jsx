import React from 'react';
import './style.css';

const Modal = ({ modalData, isOpen, onClose }) => {
  const formatKey = (key) => {
    return key.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const renderLinks = (links, type) => {
    return links.map((link, index) => (
      <a key={index} href={link} target="_blank" rel="noopener noreferrer">
        {type} {index + 1}
      </a>
    ));
  };

  const renderData = () => {
    return Object.entries(modalData)
      .filter(([key, value]) => key !== 'films' && key !== 'vehicles' && key !== 'starships')
      .map(([key, value]) => (
        <p key={key}>
          {formatKey(key)}: {Array.isArray(value) ? 'Array of URLs' : value}
        </p>
      ));
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__close-button" onClick={onClose}>X</button>
        <div className="modal__name-container">
          <p>{modalData.name}</p>
          <div className='divisor'/>
        </div>
        <div className="modal__info-container">
          {renderData()}
          {modalData.films && <p>Films: {renderLinks(modalData.films, 'Film')}</p>}
          {modalData.vehicles && <p>Vehicles: {renderLinks(modalData.vehicles, 'Vehicle')}</p>}
          {modalData.starships && <p>Starships: {renderLinks(modalData.starships, 'Starship')}</p>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
