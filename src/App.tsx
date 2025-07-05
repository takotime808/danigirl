import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery';
import Carousel from './Carousel';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState<'gallery' | 'carousel'>('gallery');

  const goTo = (p: 'gallery' | 'carousel') => {
    setPage(p);
    setMenuOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">☰</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Dani's Photo Gallery</p>
      </header>
      {menuOpen && (
        <nav className="menu">
          <ul>
            <li onClick={() => goTo('gallery')}>Gallery</li>
            <li onClick={() => goTo('carousel')}>Carousel</li>
          </ul>
        </nav>
      )}
      {page === 'gallery' ? <Gallery /> : <Carousel />}
    </div>
  );
}

export default App;
