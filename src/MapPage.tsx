import React from 'react';
import { useNavigate } from 'react-router-dom';

const MapPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (region: string) => {
    navigate(`/gallery/${region}`);
  };

  return (
    <div className="map-page">
      <h1>Select a Region</h1>
      <svg width={500} height={200} style={{ border: '1px solid #ccc' }}>
        <rect x={40} y={40} width={80} height={40} fill="#88c" onClick={() => handleClick('hawaii')} />
        <text x={50} y={65} fill="white">Hawaii</text>
        <rect x={150} y={40} width={120} height={40} fill="#c88" onClick={() => handleClick('california')} />
        <text x={160} y={65} fill="white">California</text>
        <rect x={300} y={40} width={120} height={40} fill="#8c8" onClick={() => handleClick('newyork')} />
        <text x={310} y={65} fill="white">New York</text>
      </svg>
    </div>
  );
};

export default MapPage;
