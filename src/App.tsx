import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            <li>
              <a
                href="https://takotime808.github.io/danigirl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                danigirl
              </a>
            </li>
            <li>
              <a
                href="https://cmutnik.github.io/takophotos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tako Photos
              </a>
            </li>
            <li>
              <a
                href="https://cmutnik.github.io/takophotos/gallery/gallery01/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gallery 01
              </a>
            </li>
          </ul>
        </nav>
      )}
      <Gallery />
    </div>
  );
}

export default App;
