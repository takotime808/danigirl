import React from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Dani's Photo Gallery</p>
        <nav className="App-nav">
          <a href="/">Gallery</a>
          <a href="https://cmutnik.github.io/takophotos/" target="_blank" rel="noopener noreferrer">Slider</a>
        </nav>
      </header>
      <Gallery />
    </div>
  );
}

export default App;
