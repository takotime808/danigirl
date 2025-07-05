import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery';
import Carousel from './Carousel';

function App() {
  const [page, setPage] = useState<'gallery' | 'carousel'>('gallery');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Dani's Photo Gallery</p>
        <nav className="App-nav">
          <button onClick={() => setPage('gallery')}>Gallery</button>
          <button onClick={() => setPage('carousel')}>Slider</button>
        </nav>
      </header>
      {page === 'gallery' ? <Gallery /> : <Carousel />}
    </div>
  );
}

export default App;
