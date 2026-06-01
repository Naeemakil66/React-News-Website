import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // <-- Switch to HashRouter
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter> {/* <-- Wrap your App inside it */}
      <App />
    </HashRouter>
  </React.StrictMode>
);