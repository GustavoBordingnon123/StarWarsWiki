import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Modal from '../components/modal';

describe('Modal', () => {
  it('renders modal correctly', () => {
    const mockModalData = {
      name: 'Luke Skywalker',
      height: '172',
      gender: 'male',
      films: ['film1', 'film2'],
      vehicles: ['vehicle1', 'vehicle2'],
      starships: ['starship1', 'starship2']
    };

    render(<Modal modalData={mockModalData} isOpen={true} onClose={() => {}} />);

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Height: 172')).toBeInTheDocument();
    expect(screen.getByText('Gender: male')).toBeInTheDocument();
    expect(screen.getByText(/Films:/)).toBeInTheDocument();
    expect(screen.getByText(/Vehicles:/)).toBeInTheDocument();
    expect(screen.getByText(/Starships:/)).toBeInTheDocument();
  });

  it('calls onClose handler when close button is clicked', () => {
    const handleClose = jest.fn();

    render(<Modal modalData={{}} isOpen={true} onClose={handleClose} />);

    fireEvent.click(screen.getByText('X'));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
