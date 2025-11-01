import React from 'react';
import './Gallery.css';

const images = [
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/1.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/18.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/2.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/3.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/4.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/5.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/7.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/8.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/6.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/12.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/rd-juicy-1.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/15.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/17.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/2Q6A4289.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/ny_jc_2025.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/rd-juicy-2.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/9.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/10.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/11.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/13.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/14.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/16.webp',
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
