import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders gallery heading', () => {
  render(<App />);
  const headings = screen.getAllByText(/photo gallery/i);
  expect(headings.length).toBeGreaterThan(0);
});
