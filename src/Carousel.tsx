import React, { useState } from 'react';
import './Carousel.css';

const images = [
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/1.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/2.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/3.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/4.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/5.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/6.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/7.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/8.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/9.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/10.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/11.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/12.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/13.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/14.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/15.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/16.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/17.webp',
  'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images/18.webp',
];

function Carousel() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="carousel">
      <h2>Image Carousel</h2>
      <div className="carousel-container">
        <button onClick={prev} aria-label="Previous image" className="nav-button">‹</button>
        <img src={images[index]} alt={`Slide ${index}`} />
        <button onClick={next} aria-label="Next image" className="nav-button">›</button>
      </div>
    </div>
  );
}

export default Carousel;
