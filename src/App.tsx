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
            <div className="App-inset-frameWrapper">
              <iframe
                src={`${process.env.PUBLIC_URL || ''}/travel-map/index.html`}
                title="Mutnik Adventures travel map"
                loading="lazy"
                className="App-inset-frame"
              />
            </div>
            <p className="App-inset-caption">
              Need more space?{' '}
              <a
                href={`${process.env.PUBLIC_URL || ''}/travel-map/index.html`}
                target="_blank"
                rel="noreferrer"
              >
                Open the travel map in a separate tab.
              </a>
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
