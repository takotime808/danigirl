import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery';
import Carousel from './Carousel';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [view, setView] = useState<'gallery' | 'carousel'>('gallery');

  return (
    <div className="App">
      <header className="App-header">
        <button
          className="hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Dani's Photo Gallery</p>
      </header>
      {menuOpen && (
        <nav className="menu">
          <button
            className="close-menu"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ←
          </button>
          <ul>
            <li>
              <a
                href="https://takotime808.github.io/danigirl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DaniGirl
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  setView('gallery');
                  setMenuOpen(false);
                }}
              >
                Gallery
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setView('carousel');
                  setMenuOpen(false);
                }}
              >
                Carousel
              </button>
            </li>
          </ul>
        </nav>
      )}
      {view === 'gallery' ? <Gallery /> : <Carousel />}
    </div>
  );
}

export default App;
