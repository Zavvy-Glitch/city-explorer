import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './header.js'


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

