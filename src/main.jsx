import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet-async';
import { HelmetProvider } from 'react-helmet-async';
import { hydrateRoot, createRoot } from 'react-dom/client';

import './index.css';
import App from './App';

const container = document.getElementById('root');

if (container.hasChildNodes()) {
  hydrateRoot(container, 
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
} else {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>  
  );
}
