import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders map heading', () => {
  render(<App />);
  const heading = screen.getByText(/select a region/i);
  expect(heading).toBeInTheDocument();
});
