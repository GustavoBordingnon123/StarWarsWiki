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
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${page}`)
      .then(response => response.json())
      .then(data => setPeople(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, [page]);

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleCardClick = async (personId) => {
    try {
      const response = await fetch(`https://swapi.dev/api/people/${personId}`);
      const data = await response.json();
      setModalData(data);
      setIsModalOpen(true);
      console.log(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
          <Menu />
        </div>

        <div className="card__container">
          {people.map((person, index) => (
            <Card key={person.name} data={person} onClick={() => handleCardClick(index + 1)} />
          ))}
        </div>

        <div className='pagination__container'>
          <Pagination currentPage={page} onPageClick={handlePageClick} />
        </div>

      </div>
    </body>
  );
}

export default App;
