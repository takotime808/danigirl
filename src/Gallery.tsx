import React from 'react';
import './Gallery.css';
import { regionImages } from './regionImages';

function getRegionFromPath(): string {
  const base = process.env.PUBLIC_URL || '';
  const path = window.location.pathname.replace(base, '');
  const parts = path.split('/').filter(Boolean);
  return parts.length > 1 ? parts[1] : 'default';
}

const region = getRegionFromPath();
const images = regionImages[region] || regionImages.default;

function Gallery() {
  return (
    <div className="gallery">
      <h2>Photo Gallery{region !== 'default' ? ` - ${region}` : ''}</h2>
      <div className="gallery-grid">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Gallery ${idx}`} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
