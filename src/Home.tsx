import React from 'react';

function Home() {
  const base = process.env.PUBLIC_URL || '';

  return (
    <div className="home">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
        alt="World Map"
        useMap="#worldmap"
        style={{ cursor: 'pointer', maxWidth: '80%', height: 'auto' }}
      />
      <map name="worldmap">
        <area
          shape="rect"
          coords="220,80,340,140"
          href={`${base}/gallery/canada`}
          alt="Canada"
        />
        <area
          shape="rect"
          coords="250,180,310,240"
          href={`${base}/gallery/california`}
          alt="California"
        />
        <area
          shape="rect"
          coords="320,200,380,250"
          href={`${base}/gallery/texas`}
          alt="Texas"
        />
        <area
          shape="rect"
          coords="320,260,380,300"
          href={`${base}/gallery/mexico`}
          alt="Mexico"
        />
      </map>
      <p>Click a location to view the photo gallery</p>
    </div>
  );
}

export default Home;
