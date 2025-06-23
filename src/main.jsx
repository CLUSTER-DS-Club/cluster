import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop.jsx';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/cluster">
      <App />
      <ScrollToTop />
    </BrowserRouter>
  </React.StrictMode>
);