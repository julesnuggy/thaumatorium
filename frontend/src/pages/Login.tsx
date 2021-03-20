import React, { useState, useContext } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import { LoginForm } from '../components/Forms/LoginForm';
import Page from '../components/Page/Page';
import { userApis } from '../services/servatorium';
import { UserLoginFormValues } from '../models/User';

type LoginProps = {
  LoginContext: React.Context
}

const Login = ({ LoginContext }: LoginProps) => {
  const history = useHistory();
  const [isLoginValid, setIsLoginValid] = useState<boolean>();
  const { loggedInUser, setLoggedInUser } = useContext(LoginContext)

  const onSubmit = async (values: UserLoginFormValues) => {
    const { isAuthenticated } = await userApis.authenticateUser(values)
      .catch(() => {
        setIsLoginValid(false);
        throw new Error('Invalid username or password')
      });
    await setIsLoginValid(isAuthenticated);
    setLoggedInUser(values.username);
    history.push('/archmagistration');
  }

  return (
    loggedInUser ?
      (
        <Redirect to='/archmagistration' />
      ) : (
        <Page title="Login">
          <LoginForm onSubmit={onSubmit} isLoginValid={isLoginValid} />
        </Page>
      )
  );
}

export default Login;