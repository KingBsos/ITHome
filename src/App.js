import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import { ArticalPageBind } from './components/ArticalPage';
import Page404 from './components/Page404';

function App(props) {
  return (
    <div className="container">
      <Switch>
        <Route path="/404" component={Page404} />
        <Route path="/artical/:id" component={ArticalPageBind} />
        <Route component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;