import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery';

function App() {
  const [activeTab, setActiveTab] = useState<'gallery' | 'inset' | 'starchart'>('gallery');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Dani's Photo Gallery</p>
      </header>
      <nav className="App-tabs" aria-label="Main content tabs">
        <button
          type="button"
          className={`App-tab-button${activeTab === 'gallery' ? ' App-tab-button--active' : ''}`}
          onClick={() => setActiveTab('gallery')}
        >
          Gallery
        </button>
        <button
          type="button"
          className={`App-tab-button${activeTab === 'inset' ? ' App-tab-button--active' : ''}`}
          onClick={() => setActiveTab('inset')}
        >
          Travel Map
        </button>
        <button
          type="button"
          className={`App-tab-button${activeTab === 'starchart' ? ' App-tab-button--active' : ''}`}
          onClick={() => setActiveTab('starchart')}
        >
          Starchart
        </button>
      </nav>
      <main className="App-content">
        {activeTab === 'gallery' && <Gallery />}
        {activeTab === 'inset' && (
          <div className="App-inset" aria-live="polite">
            <div className="App-inset-frameWrapper">
              <iframe
                src="https://takotime808.github.io/mutnik_adventures/"
                title="Adventures"
                loading="lazy"
                scrolling="no"
                className="App-inset-frame"
              />
            </div>
          </div>
        )}
        {activeTab === 'starchart' && (
          <div className="App-inset" aria-live="polite">
            <div className="App-inset-frameWrapper">
              <iframe
                src="https://virtualsky.lco.global/embed/index.html?longitude=-122.4194&latitude=37.7749&projection=stereo&constellations=true&showstarlabels=true&gridlines_az=true&live=true"
                title="Live starchart"
                loading="lazy"
                scrolling="no"
                className="App-inset-frame"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
