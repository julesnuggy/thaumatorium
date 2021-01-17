import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";

import './Global.module.scss';

const App = (): React.FC => (
  <BrowserRouter>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;