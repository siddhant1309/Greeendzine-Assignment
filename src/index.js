// index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import App from './App';
import './App.css'; // Import your global styles

const rootElement = document.getElementById('root');

// Replace ReactDOM.render with createRoot().render
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
