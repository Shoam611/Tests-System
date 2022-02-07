import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainNavigator from './Naigation/MainNavigator'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainNavigator />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);