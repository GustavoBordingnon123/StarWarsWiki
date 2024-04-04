import React, { useState, useEffect } from 'react';
import './App.css';

import Menu from './components/menu';
import Card from './components/card';
import Pagination from './components/pagination';
import Modal from './components/modal';

import Logo from './assets/images/logo.png';
import BrasilFlag from './assets/icons/brasil.png';
import UnitedEstatesFlag from './assets/icons/united-states.png';

function App() {
  const [entities, setEntities] = useState('people'); 
  const [entityData, setEntityData] = useState([]);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);


  useEffect(() => {
    fetch(`https://swapi.dev/api/${entities}/?page=${page}`) 
      .then(response => response.json())
      .then(data => setEntityData(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, [entities, page]); 

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleCardClick = async (entityId) => {
    try {
      const response = await fetch(`https://swapi.dev/api/${entities}/${entityId}`);
      const data = await response.json();
      setModalData(data);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleMenuClick = (entity) => {
    setEntities(entity); 
    setPage(1); 
  };

  return (
    <body>
      {isModalOpen && <Modal modalData={modalData} onClose={() => setIsModalOpen(false)} />}

      <div className="container">

        <div className="image__container">
          <img className="title" src={Logo} alt='logo' />
          <div className="language__container">
            <img className="title" src={BrasilFlag} alt='logo' />
            <img className="title" src={UnitedEstatesFlag} alt='logo' />
          </div>
        </div>

        <div className="menu__container">
          <Menu onClick={handleMenuClick} />
        </div>

        <div className="card__container">
          
          {entityData ? (
            entityData.map((entity, index) => (
              <Card
                key={index + 1}
                data={entity}
                onClick={() =>
                  handleCardClick(
                    page === 1 ? index + 1 : index + 2 + 10 * (page - 1)
                  )
                }
              />
            ))
          ) : (
            <div className='error__text'>
              <p>Não foi possível encontrar os dados.</p>
            </div>
          )}

        </div>

        <div className='pagination__container'>
          <Pagination currentPage={page} onPageClick={handlePageClick} />
        </div>

      </div>
    </body>
  );
}

export default App;
