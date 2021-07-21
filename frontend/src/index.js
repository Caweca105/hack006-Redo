import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import Dashboard from './components/Dashboard'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={LandingPage} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
   
  </BrowserRouter>,
  document.getElementById('root')
);


