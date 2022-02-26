import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

import Navigator from './Naigation/MainNavigator'
import questionReducer from 'Store/reducers/question';
import topicReducer from 'Store/reducers/topic';
import testReducer from 'Store/reducers/test';
import './index.css';

const rootReducer = combineReducers({
  questions: questionReducer,
  topic: topicReducer,
  tests: testReducer
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navigator />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);