import React from 'react';
import './Gallery.css';

const images = [
  'https://source.unsplash.com/random/300x200?nature1',
  'https://source.unsplash.com/random/300x200?nature2',
  'https://source.unsplash.com/random/300x200?nature3',
  'https://source.unsplash.com/random/300x200?nature4',
  'https://source.unsplash.com/random/300x200?nature5',
  'https://source.unsplash.com/random/300x200?nature6',
];

function Gallery() {
  return (
    <div className="gallery">
      <h2>Photo Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Gallery ${idx}`} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
