import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Pagination from '../components/pagination';

describe('Pagination', () => {
  it('renders pagination correctly', () => {
    const onPageClick = jest.fn();

    render(<Pagination currentPage={1} onPageClick={onPageClick} />);

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();
    expect(screen.getByText('9')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('calls onPageClick handler when page button is clicked', () => {
    const onPageClick = jest.fn();

    render(<Pagination currentPage={1} onPageClick={onPageClick} />);

    fireEvent.click(screen.getByText('2'));

    expect(onPageClick).toHaveBeenCalledTimes(1);
    expect(onPageClick).toHaveBeenCalledWith(2);
  });
});
