import React from 'react';
import { render, screen } from '@testing-library/react';
import Gallery from './Gallery';

test('renders photo gallery heading', () => {
  render(<Gallery />);
  const heading = screen.getByText(/photo gallery/i);
  expect(heading).toBeInTheDocument();
});
