import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders world map on home page', () => {
  window.history.pushState({}, 'Home', '/');
  render(<App />);
  const map = screen.getByAltText(/world map/i);
  expect(map).toBeInTheDocument();
});

test('renders gallery when on gallery page', () => {
  window.history.pushState({}, 'Gallery', '/gallery');
  render(<App />);
  const heading = screen.getByText(/photo gallery/i);
  expect(heading).toBeInTheDocument();
});
