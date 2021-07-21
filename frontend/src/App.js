<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import LandingPage from './components/landingPage';
import Home from './components/home';
import {
  Switch,
  useLocation,
  Route
} from "react-router-dom";

function App() {
  const location = useLocation();
  return <div>

      <LandingPage pagina = {location.pathname} />
      <Switch>
        <Route exact path="/logIn" children={<logIn />}></Route>
        <Route exact path="/signUp" children={<signUp />}></Route>
      </Switch>

      <Home pagina = {location.pathname}/>
      <Switch>
        <Route exact path="/requalificacao" children={<requalificacao />}></Route>
        <Route exact path="/emprego" children={<emprego />}></Route>
        <Route exact path="/perfil" children={<children />}></Route>
      </Switch>

      {/* routs para levar para sites de requalificaçao ou sites de emprego */}
      <Switch>
        <Route exact path=""></Route>
        <Route exact path=""></Route>
      </Switch>
    </div>;
=======
import logo from './logo.svg';
import './App.css';
import LandingPage from './landingpage';

function App() {
  return (
    <LandingPage/>
  )
>>>>>>> d8c9a3ec5c47c55f7aa6f23d1176b60dcbac723c
}

export default App;
