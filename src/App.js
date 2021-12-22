import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import About from "./containers/About";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} key="/" />
      <Route exact path="/about" component={About} key="/sobre" />
    </Switch>
  </BrowserRouter>
);

export default App;
