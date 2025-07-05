import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapPage from './MapPage';
import GalleryPage from './GalleryPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Routes>
          <Route path="/" element={<MapPage />} />
          <Route path="/gallery/:region" element={<GalleryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
