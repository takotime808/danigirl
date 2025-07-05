import React from 'react';
import { render, screen } from '@testing-library/react';
import Gallery from './Gallery';
import { galleryByRegion } from './galleryImages';

test('renders photo gallery heading', () => {
  render(<Gallery images={galleryByRegion.hawaii} />);
  const heading = screen.getByText(/photo gallery/i);
  expect(heading).toBeInTheDocument();
});
