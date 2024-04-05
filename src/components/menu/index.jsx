import React, { useState } from 'react';
import './style.css';

const Menu = ({ onClick, language }) => {

const menuItems = [
    { name: language === 'en' ? 'Characters' : 'Personagens', route: 'people', isActive: true },
    { name: language === 'en' ? 'Starships' : 'Naves', route: 'starships', isActive: false },
    { name: language === 'en' ? 'Vehicles' : 'Veículos', route: 'vehicles', isActive: false },
    { name: language === 'en' ? 'Planets' : 'Planetas', route: 'planets', isActive: false },
    { name: language === 'en' ? 'Species' : 'Espécies', route: 'species', isActive: false },
    ];

  const [activeItem, setActiveItem] = useState(menuItems.find(item => item.isActive).name);

  const handleClick = (item) => {
    setActiveItem(item.name);
    onClick(item.route);
  };

  return (
    <nav>
      <ul className='menu'>
        {menuItems.map((item, index) => (
          <React.Fragment key={item.name}>
            <li className={item.name === activeItem ? 'active' : ''}>
              <p onClick={() => handleClick(item)}>{item.name}</p>
            </li>
            {index < menuItems.length - 1 && <div className='col' />}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
