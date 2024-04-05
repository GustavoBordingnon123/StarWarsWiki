import React, { useState } from 'react';
import './style.css';

const Menu = ({ onClick }) => {
    const menuItems = [
        { name: 'Personagens', route: 'people', isActive: true },
        { name: 'Naves', route: 'starships', isActive: false },
        { name: 'Veiculos', route: 'vehicles', isActive: false },
        { name: 'Planetas', route: 'planets', isActive: false },
        { name: 'Especies', route: 'species', isActive: false },
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
