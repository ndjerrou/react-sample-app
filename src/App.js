import React from "react";
import Command from "./components/Command";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products/:id" component={Command} />
      </Switch>
    </Router>
  );
};

export default App;
