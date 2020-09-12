import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App.js';
import { Provider } from 'react-redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import createState from './reducers';
import './mockData';
import { fetchAllArtical, fetchCarouselData } from './actions';

const history = createBrowserHistory();

const store = createStore(createState(history), applyMiddleware(routerMiddleware(history), ReduxThunk));
store.dispatch(fetchAllArtical('/allArtical'));
store.dispatch(fetchCarouselData('/carouselData'));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <BrowserRouter>
          <Route path="/" component={App} />
        </BrowserRouter>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
