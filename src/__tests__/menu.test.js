import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Menu from '../components/menu';

describe('Menu', () => {
  it('renders menu correctly', () => {
    render(<Menu onClick={() => {}} />);
    
    expect(screen.getByText('Personagens')).toBeInTheDocument();
    expect(screen.getByText('Naves')).toBeInTheDocument();
    expect(screen.getByText('Veículos', { selector: 'p' })).toBeInTheDocument();
    expect(screen.getByText('Planetas')).toBeInTheDocument();
    expect(screen.getByText('Espécies')).toBeInTheDocument();
  });

  it('calls onClick handler when menu item is clicked', () => {
    const handleClick = jest.fn();

    render(<Menu onClick={handleClick} />);

    fireEvent.click(screen.getByText('Naves'));

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith('starships');
  });
});
