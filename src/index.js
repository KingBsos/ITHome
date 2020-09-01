import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App.js';
import { Provider } from 'react-redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state from './reducers';
import './mockData';
import { fetchAllArtical } from './actions';

const store = createStore(state, applyMiddleware(ReduxThunk));
store.dispatch(fetchAllArtical('/allArtical'));

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
