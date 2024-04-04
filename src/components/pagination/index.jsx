import React from 'react';
import Styles from './style.css';

const Pagination = ({ currentPage, onPageClick }) => {
  const totalPages = 10;

  return (
    <ul className='Pagination'>
      {[...Array(totalPages).keys()].map(pageNumber => (
        <li key={pageNumber + 1} className={currentPage === pageNumber + 1 ? 'active' : ''}>
          <button onClick={() => onPageClick(pageNumber + 1)}>
            {pageNumber + 1}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;

