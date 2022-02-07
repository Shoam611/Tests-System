import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigator from './Naigation/MainNavigator'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigator />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);