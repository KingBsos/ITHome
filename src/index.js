import './index.css';
import './mockData';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import {
  applyMiddleware,
  createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import App from './App.js';
import state from './reducers';
import rootSaga from './sagas';
import * as serviceWorker from './serviceWorker';

const saga = createSagaMiddleware();

const store = createStore(state, applyMiddleware(saga));
saga.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <Route path="/" component={App} />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
