import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery';

function App() {
  const [activeTab, setActiveTab] = useState<'gallery' | 'inset'>('gallery');

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
      </nav>
      <main className="App-content">
        {activeTab === 'gallery' ? (
          <Gallery />
        ) : (
          <div className="App-inset" aria-live="polite">
            {/* <h2>Photography Inspiration</h2> */}
            {/* <p>
              Explore a curated page for fresh ideas. If it does not load in the inset,
              you can open it in a new tab using the link below.
            </p> */}
            <div className="App-inset-frameWrapper">
              <iframe
                src="https://takotime808.github.io/mutnik_adventures/"
                title="Adventures"
                loading="lazy"
                scrolling="no"
                className="App-inset-frame"
              />
            </div>
            {/* <p>
              <a href="https://takotime808.github.io/mutnik_adventures/" target="_blank" rel="noreferrer">
                Open the National Park Service site in a new tab
              </a>
            </p> */}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
