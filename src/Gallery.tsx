import React, { useEffect, useState } from 'react';
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
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="gallery">
      <h2>Photo Gallery</h2>
      <div className="carousel">
        <img
          className="carousel-image"
          src={images[index]}
          alt={`Gallery ${index}`}
        />
      </div>
    </div>
  );
}

export default Gallery;
