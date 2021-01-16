import React from "react";
import Home from "./pages/Home";
import Page from "./components/Page";

import './App.module.scss';

const App = (): React.FC => (
  <div className="App">
    <Page>
      <Home />
    </Page>
  </div>
);

export default App;