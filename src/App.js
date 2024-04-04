import React, { useState, useEffect } from 'react';
import './App.css';

// components
import Menu from './components/menu';
import Card from './components/card';

// images
import Logo from './assets/images/logo.png';
import BrasilFlag from './assets/icons/brasil.png';
import UnitedEstatesFlag from './assets/icons/united-states.png';


function App() {

  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then(response => response.json())
      .then(data => setPeople(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <body>
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
          {people.map(person => (
            <Card key={person.name} data={person} />
          ))}
        </div>

      </div>
    </body>
  );
}

export default App;
