import React from 'react';
import Styles from './style.css';

import Sol from '../../assets/images/planets/Sol.png';
import Lua from '../../assets/images/planets/lua.png';
import Mercurio from '../../assets/images/planets/mercurio.png';
import Venus from '../../assets/images/planets/venus.png';
import Terra from '../../assets/images/planets/terra.png';
import Marte from '../../assets/images/planets/marte.png';
import Jupiter from '../../assets/images/planets/jupiter.png';
import Saturno from '../../assets/images/planets/saturno.png';
import Urano from '../../assets/images/planets/urano.png';
import Netuno from '../../assets/images/planets/netuno.png';

const Pagination = ({ currentPage, onPageClick }) => {
  const totalPages = 10;
  const images = [Sol, Lua, Mercurio, Venus, Terra, Marte, Jupiter, Saturno, Urano, Netuno];

  return (
    <ul className='Pagination'>
      {[...Array(totalPages).keys()].map(pageNumber => (
        <li key={pageNumber + 1} className={currentPage === pageNumber + 1 ? 'active' : ''}>
          <button
            onClick={() => onPageClick(pageNumber + 1)}
            style={{ backgroundImage: `url(${images[pageNumber]})` }}
          >
            {pageNumber + 1}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
