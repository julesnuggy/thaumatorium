import React, { createContext, useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Items from './pages/Items';
import Equipment from './pages/Equipment';
import Magic from './pages/Magic';
import Archmagistration from './pages/Archmagistration';
import Login from './pages/Login';
import Header from "./components/Header/Header";
import { userApis } from "./services/servatorium";
import { useRequestState } from "./utils/hooksUtils";

import './Global.module.scss';

type LoginContextType = {
  loggedInUser: string,
  setLoggedInUser: React.Dispatch<any>
}

const LoginContext = createContext<LoginContextType>({
  loggedInUser: null,
  setLoggedInUser: () => {}
});

const useUsersRequests = () => {
  const verifySession = useCallback(() => userApis.verifySession(), []);
  const logout = useCallback(() => userApis.logout(), []);
  const { loading, data, error, call: callVerifySession } = useRequestState(verifySession);
  const { success: logoutSuccess, call: callLogout } = useRequestState(logout);

  useEffect(() => {
    callVerifySession();
  }, [callVerifySession])

  return {
    loading,
    data,
    error,
    callVerifySession,
    logoutSuccess,
    callLogout
  };
}

const App = (): React.FC => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const loginContextValues = { loggedInUser, setLoggedInUser };
  const { loading, data, error, callVerifySession, logoutSuccess, callLogout } = useUsersRequests();

  useEffect(() => {
    if (loggedInUser && !data) {
      callVerifySession()
    }

    if (!loggedInUser && data) {
      setLoggedInUser(data.username);
    }

    if (logoutSuccess) {
      setLoggedInUser(null);
    }
  }, [data, callVerifySession, setLoggedInUser, logoutSuccess])

  return (
    <BrowserRouter>
      <LoginContext.Provider value={loginContextValues}>
        <Header LoginContext={LoginContext} onLogout={callLogout} />
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
            {loading && <div>Loading...</div>}
            {!loading && loggedInUser && <Archmagistration/>}
            {((error && !loggedInUser) || (logoutSuccess)) && <Redirect to="/login"/>}
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