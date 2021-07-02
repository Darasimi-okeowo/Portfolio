import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import MainPage from "./Components/MainPage/MainPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path='/main' component={MainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
