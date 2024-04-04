import React from 'react';
import Styles from './style.css';

const Modal = ({ modalData, isOpen, onClose }) => {
  const formatKey = (key) => {
    return key.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const renderFilmLinks = () => {
    return modalData.films.map((film, index) => (
      <a key={index} href={film} target="_blank" rel="noopener noreferrer">
        Film {index + 1}
      </a>
    ));
  };

  const renderVehicleLinks = () => {
    return modalData.vehicles.map((vehicle, index) => (
      <a key={index} href={vehicle} target="_blank" rel="noopener noreferrer">
        Vehicle {index + 1}
      </a>
    ));
  };

  const renderStarshipLinks = () => {
    return modalData.starships.map((starship, index) => (
      <a key={index} href={starship} target="_blank" rel="noopener noreferrer">
        Starship {index + 1}
      </a>
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
          {Object.entries(modalData)
            .filter(([key, value]) => key !== 'films' && key !== 'vehicles' && key !== 'starships')
            .map(([key, value]) => (
              <p key={key}>
                {formatKey(key)}: {Array.isArray(value) ? 'Array of URLs' : value}
              </p>
            ))}
          <p>
            Films: {renderFilmLinks()}
          </p>
          <p>
            Vehicles: {renderVehicleLinks()}
          </p>
          <p>
            Starships: {renderStarshipLinks()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
