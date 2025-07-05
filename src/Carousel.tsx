import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="carousel">
      <img src={images[index]} alt={`Slide ${index}`} />
      <button className="prev" onClick={prev} aria-label="Previous">&#8249;</button>
      <button className="next" onClick={next} aria-label="Next">&#8250;</button>
    </div>
  );
}

export default Carousel;
