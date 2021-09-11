import React from 'react';
import mySVG from './assets/undraw_Login_re_4vu2.svg';
import Signin from './components/Signin';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AccountDetail from "./components/AccountDetail";
import AccountListing from './components/AccountListing';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component = {AccountListing} />
        <Route path="/account/:accountId" exact component = {AccountDetail} />
      </Switch>
    </Router>
    </div>
    // <div className="col container mt-3">
    //   <div className = "row">
    //     <div className="col-md-7">
    //       <img className="img-fluid w-100" src = {mySVG} />
    //     </div>
    //     <div className = "col-md-4">
    //       <Signin />
    //     </div>
    //   </div>
      
      
    // </div>
  )
}

export default App
