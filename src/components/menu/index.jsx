import React, { useState } from 'react';
import './style.css';

const Menu = () => {

    const items__pt = ['Personagens', 'Filmes', 'Naves', 'Veiculos', 'Planetas','Especies'];
    const [activeItem, setActiveItem] = useState(items__pt[0]);

    const handleClick = (item) => {
        setActiveItem(item);
    };

    return (
        <nav>
            <ul>
                {items__pt.map((item, index) => (
                    <React.Fragment key={item}>
                        <li className={item === activeItem ? 'active' : ''}>
                            <p onClick={() => handleClick(item)}>{item}</p>
                        </li>
                        {index < items__pt.length - 1 && <div className='col' />}
                    </React.Fragment>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;
