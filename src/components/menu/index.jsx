import React, { useState } from 'react';
import './style.css';

const Menu = ({ onClick }) => {
    const menuItems = [
        { name: 'Personagens', route: 'people' },
        { name: 'Naves', route: 'starships' },
        { name: 'Veiculos', route: 'vehicles' },
        { name: 'Planetas', route: 'planets' },
        { name: 'Especies', route: 'species' },
    ];
    const [activeItem, setActiveItem] = useState(menuItems[0].name);

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
}

export default Menu;
