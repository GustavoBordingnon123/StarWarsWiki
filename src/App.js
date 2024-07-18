// Code written by: Gustavo Bordignon
import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';

//components
import Menu from './components/menu';
import Card from './components/card';
import Pagination from './components/pagination';
import Modal from './components/modal';

//assets
import Logo from './assets/images/logo.png';
import BrasilFlag from './assets/icons/brasil.png';
import UnitedStatesFlag from './assets/icons/united-states.png';

function App() {
  const [entities, setEntities] = useState('people');
  const [entityData, setEntityData] = useState([]);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [activeRoute, setActiveRoute] = useState('people');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const loader = setTimeout(() => {
      toast.dismiss();
    }, 2000);

    toast(language === 'en' ? 'Loading data...' : 'Carregando dados...');

    fetch(`https://swapi.dev/api/${entities}/?page=${page}`)
      .then(response => response.json())
      .then(data => setEntityData(data.results))
      .catch(error => console.error('Error fetching data:', error))
  }, [entities, page, language]);

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleCardClick = async (entity) => {
    try {
      setModalData(entity);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleMenuClick = (entity) => {
    setEntities(entity);
    setPage(1);
    setActiveRoute(entity);
  };

  const handleLanguageClick = (lang) => {
    setLanguage(lang);
  };

  return (
    <body>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      {isModalOpen && <Modal modalData={modalData} onClose={() => setIsModalOpen(false)} />}

      <section className='stars__container'>
        <div className='star star1'></div>
        <div className='star star2'></div>
        <div className='star star3'></div>
        <div className='star star4'></div>
        <div className='star star5'></div>
        <div className='star star6'></div>
        <div className='star star7'></div>
        <div className='star star8'></div>
      </section>

      <div className="container">

        <div className="image__container">
          <a href='passagens.embarca.ai://passagem-de-onibus/curitiba-pr/ponta-grossa-pr/2024-07-20/false'>teste</a>
          <img className="title" src={Logo} alt='logo' />
          <div className="language__container">
            <img
              className="title"
              src={BrasilFlag}
              alt='logo'
              onClick={() => handleLanguageClick('pt')}
            />
            <img
              className="title"
              src={UnitedStatesFlag}
              alt='logo'
              onClick={() => handleLanguageClick('en')}
            />
          </div>
        </div>

        <div className="menu__container">
          <Menu onClick={handleMenuClick} language={language} />
        </div>

        <div className="card__container">
          {entityData ? (
            entityData.map((entity, index) => (
              <Card
                key={index + 1}
                data={entity}
                onClick={() => handleCardClick(entity)}
                activeRoute={activeRoute}
                language={language}
              />
            ))
          ) : (
            <div className='error__text'>
              <p>{language === 'en' ? 'Oops, there are no more data for this page....' : 'Ops, não existem mais dados para essa página....'}</p>
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
