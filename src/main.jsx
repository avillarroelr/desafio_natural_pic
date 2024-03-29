import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { PhotoProvider } from './context/PhotoContext';
//  se modifica main para envolver la app con el context PhotoProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PhotoProvider>
        <App />
      </PhotoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
