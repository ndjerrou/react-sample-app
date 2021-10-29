import React from "react";
import Command from "./components/Command"; // eslint-disable-line
import Header from "./components/Header"; // eslint-disable-line
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home"; // eslint-disable-line

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Command} />
      </Switch>
    </Router>
  );
};

export default App;
