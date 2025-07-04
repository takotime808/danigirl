import React from 'react';
import './Gallery.css';

const images = [
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/1.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/2.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/3.png',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/4.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/5.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/6.png',
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
