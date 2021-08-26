import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './routers/App';
import AppState from './Context/AppContext';

ReactDOM.render(
  <AppState>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AppState>,
  document.getElementById('root')
);
