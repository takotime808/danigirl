import React from 'react';

function Home() {
  const goToGallery = () => {
    const base = process.env.PUBLIC_URL || '';
    window.location.href = `${base}/gallery`;
  };

  return (
    <div className="home">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
        alt="World Map"
        style={{ cursor: 'pointer', maxWidth: '80%', height: 'auto' }}
        onClick={goToGallery}
      />
      <p>Click a location to view the photo gallery</p>
    </div>
  );
}

export default Home;
