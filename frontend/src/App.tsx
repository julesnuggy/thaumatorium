import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Items from "./pages/Items";
import Equipment from "./pages/Equipment";
import Magic from "./pages/Magic";
import Archmagistration from "./pages/Archmagistration";

import './Global.module.scss';

const App = (): React.FC => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/items">
        <Items />
      </Route>
      <Route path="/equipment">
        <Equipment />
      </Route>
      <Route path="/magic">
        <Magic />
      </Route>
      <Route path="/archmagistration">
        <Archmagistration />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;