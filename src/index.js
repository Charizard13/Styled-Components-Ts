import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.tsx';

ReactDOM.render(
  <React.StrictMode>
    <div style={{ backgroundColor: 'grey',  display: 'flex', justifyContent: "space-around"}}>
    <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
