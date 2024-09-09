import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';

// const AUTH_TOKEN = localStorage.getItem('token');
axios.defaults.baseURL = 'http://10.10.66.23:8080';
// axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);