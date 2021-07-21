import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Bootcamp from './components/Bootcamp';
import Jobs from './components/Jobs';
import Profile from './components/Profile'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={LandingPage} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
    <Switch>
        <Route exact path="/bootcamp" children={<Bootcamp />}></Route>
        <Route exact path="/jobs" children={<Jobs />}></Route>
        <Route exact path="/profile" children={<Profile />}></Route>
      </Switch>
      <Switch>
        <Route path="/bootcamp/:id"></Route>
        <Route path="/jobs/:id"></Route>
      </Switch>
   
  </BrowserRouter>,
  document.getElementById('root')
);


