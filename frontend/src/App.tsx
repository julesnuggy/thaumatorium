import React, {
  createContext,
  useCallback,
  useEffect,
  useState, 
} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect, 
} from 'react-router-dom';

import Home from './pages/Home';
import Items from './pages/Items';
import Equipment from './pages/Equipment';
import Magic from './pages/Magic';
import Archmagistration from './pages/Archmagistration';
import Login from './pages/Login';
import Header from './components/Header/Header';
import { userApis } from './services/servatorium';
import { useRequestState } from './utils/hooksUtils';

import './Global.module.scss';

type LoginContextType = {
  loggedInUser: string,
  setLoggedInUser: React.Dispatch<string>
}

const LoginContext = createContext<LoginContextType>({
  loggedInUser: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLoggedInUser: () => {},
});

const useUsersRequests = () => {
  const verifySession = useCallback(() => userApis.verifySession(), []);
  const logout = useCallback(() => userApis.logout(), []);
  const {
    loading: sessionLoading, data: sessionData, call: callVerifySession, reset: resetSessionState, 
  } = useRequestState(verifySession);
  const {
    success: logoutSuccess, call: callLogout, reset: resetLogoutState, 
  } = useRequestState(logout);

  useEffect(() => {
    callVerifySession();
  }, [callVerifySession])

  return {
    sessionLoading,
    sessionData,
    callVerifySession,
    resetSessionState,
    logoutSuccess,
    callLogout,
    resetLogoutState,
  };
}

const App = (): React.FC => {
  const [ loggedInUser, setLoggedInUser ] = useState(null);
  const loginContextValues = {
    loggedInUser,
    setLoggedInUser, 
  };
  const {
    sessionLoading,
    sessionData,
    callVerifySession,
    resetSessionState,
    logoutSuccess,
    callLogout,
    resetLogoutState,
  } = useUsersRequests();

  useEffect(() => {
    if (!loggedInUser && sessionData) {
      setLoggedInUser(sessionData.username);
    }

    if (logoutSuccess) {
      setLoggedInUser(null);
      resetLogoutState();
      resetSessionState();
    }
  }, [
    sessionData,
    loggedInUser,
    callVerifySession,
    setLoggedInUser,
    logoutSuccess,
    resetLogoutState,
    resetSessionState,
  ])

  return (
    <BrowserRouter>
      <LoginContext.Provider value={loginContextValues}>
        <Header LoginContext={LoginContext} onLogout={callLogout} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/items">
            <Items isLoggedIn={loggedInUser !== null} />
          </Route>
          <Route path="/equipment">
            <Equipment />
          </Route>
          <Route path="/magic">
            <Magic />
          </Route>
          <Route path="/archmagistration">
            {sessionLoading && <div>Loading...</div>}
            {loggedInUser ? (<Archmagistration />) : (<Redirect to="/login" />)}
          </Route>
          <Route path="/login">
            <Login LoginContext={LoginContext} />
          </Route>
        </Switch>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;