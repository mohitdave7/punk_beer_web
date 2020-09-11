import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home";
import Favourites from "./favourites";

function RoutingClass() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/favourites" component={Favourites} />
      </Switch>
    </Router>
  );
}

export default RoutingClass;
