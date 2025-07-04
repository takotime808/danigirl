import React from 'react';
import './Gallery.css';

const images = [
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/gh-pages/images/1_resized.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/gh-pages/images/2_resized.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/gh-pages/images/3.png',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/gh-pages/images/4_resized.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/gh-pages/images/5_resized.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/gh-pages/images/6_resized.webp',
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
