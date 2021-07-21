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
        <Route exact path="/logIn" children={<LogIn />}></Route>
        <Route exact path="/signUp" children={<SignUp />}></Route>
      </Switch>

      <Dashboard pagina = {location.pathname}/>
      <Switch>
        <Route exact path="/requalificacao" children={<Bootcamp />}></Route>
        <Route exact path="/emprego" children={<Jobs />}></Route>
        <Route exact path="/perfil" children={<Profile />}></Route>
      </Switch>

      {/* routs para levar para sites de requalificaçao ou sites de emprego */}
      <Switch>
        <Route exact path=""></Route>
        <Route exact path=""></Route>
      </Switch>
    </div>;
}

export default App;
