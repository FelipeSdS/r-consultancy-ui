import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css'
import {App} from './App';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes>
      <App />
    </Routes>
  </React.StrictMode>,
  document.getElementById('root')
);
