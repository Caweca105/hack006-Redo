// import React from 'react';
// import ReactDOM from 'react-dom';
// import './App.css';
// import LandingPage from './components/landingPage';
// import Dashboard from './components/Dashboard';
// import Jobs from './components/Jobs';
// import Bootcamp from './components/Bootcamp';
// import Profile from './components/Profile';
// import {
//   Switch,
//   useLocation,
//   Route
// } from "react-router-dom";

// function App() {
//   const location = useLocation();
//   return <div>

//       <LandingPage pagina = {location.pathname} />
//       <Switch>
//         <Route exact path="/logIn" children={<LogIn />}></Route>
//         <Route exact path="/signUp" children={<SignUp />}></Route>
//       </Switch>

//       <Dashboard pagina = {location.pathname}/>
//       <Switch>
//         <Route exact path="/bootcamp" children={<Bootcamp />}></Route>
//         <Route exact path="/jobs" children={<Jobs />}></Route>
//         <Route exact path="/profile" children={<Profile />}></Route>
//       </Switch>

//       {/* routs para levar para sites de requalificaçao ou sites de emprego */}
//       <Switch>
//         <Route path="/bootcamp/:id"></Route>
//         <Route path="/jobs/:id"></Route>
//       </Switch>
//     </div>;
// }

// export default App;
