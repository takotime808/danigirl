import React from 'react';
import './Gallery.css';

export interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
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
};

export default Gallery;
