import React, { createContext, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Items from './pages/Items';
import Equipment from './pages/Equipment';
import Magic from './pages/Magic';
import Archmagistration from './pages/Archmagistration';
import Login from './pages/Login';

import styles from './App.module.scss';
import './Global.module.scss';

type LoginContextType = {
  loggedInUser: boolean,
  setLoggedInUser: React.Dispatch<any>
}

const LoginContext = createContext<LoginContextType>({
  loggedInUser: null,
  setLoggedInUser: () => {}
});

const App = (): React.FC => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const loginContextValues = { loggedInUser, setLoggedInUser };

  return (
    <BrowserRouter>
      <LoginContext.Provider value={loginContextValues}>
        <div className={styles.headerBar}>
          {loggedInUser ? `Logged in as: ${loggedInUser}` : 'Not logged in'}
        </div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/items">
            <Items/>
          </Route>
          <Route path="/equipment">
            <Equipment/>
          </Route>
          <Route path="/magic">
            <Magic/>
          </Route>
          <Route path="/archmagistration">
            {loggedInUser ? <Archmagistration/> : <Redirect to="/login"/>}
          </Route>
          <Route path="/login">
            <Login LoginContext={LoginContext}/>
          </Route>
        </Switch>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;