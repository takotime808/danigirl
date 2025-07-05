import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Gallery from './Gallery';
import { galleryByRegion } from './galleryImages';

const GalleryPage: React.FC = () => {
  const { region } = useParams<{ region: string }>();
  const images = region && galleryByRegion[region.toLowerCase()] ? galleryByRegion[region.toLowerCase()] : galleryByRegion.hawaii;

  return (
    <div className="gallery-page">
      <Link to="/">Back to Map</Link>
      <Gallery images={images} />
    </div>
  );
};

export default GalleryPage;
