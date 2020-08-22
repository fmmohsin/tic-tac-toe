import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Container/Home'
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Home />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
