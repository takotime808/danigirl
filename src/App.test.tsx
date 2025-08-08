import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders gallery heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /photo gallery/i });
  expect(heading).toBeInTheDocument();
});
