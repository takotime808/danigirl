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
                href="https://cmutnik.github.io/takophotos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tako Photos
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
