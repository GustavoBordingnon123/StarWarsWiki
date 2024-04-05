import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../components/Card';

import { act } from '@testing-library/react';

describe('Card', () => {
  it('renders card correctly', () => {
    const data = {
      name: 'Luke Skywalker',
    };
    const activeRoute = 'people';
    act(() => {
      render(<Card data={data} activeRoute={activeRoute} />);
    });

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  });
});
