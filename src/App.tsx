import React from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery';
import Home from './Home';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>Welcome to Dani's Photo Gallery</p>
  </header>
);

function App() {
  const base = process.env.PUBLIC_URL || '';
  const path = window.location.pathname.replace(base, '');
  const showGallery = path.includes('gallery');
  return (
    <div className="App">
      <Header />
      {showGallery ? <Gallery /> : <Home />}
    </div>
  );
}

export default App;
