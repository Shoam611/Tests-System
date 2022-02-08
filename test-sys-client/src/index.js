import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import Navigator from './Naigation/MainNavigator'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigator />
    </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById('root')
);