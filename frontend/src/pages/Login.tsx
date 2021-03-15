import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

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
  const { setLoggedInUser } = useContext(LoginContext)

  const onSubmit = async (values: UserLoginFormValues) => {
    const authRes = await userApis.authenticateUser(values);
    await setIsLoginValid(authRes);
    setLoggedInUser(values.username);
    history.push('/archmagistration');
  }

  return (
    <Page title="Login">
      <LoginForm onSubmit={onSubmit} isLoginValid={isLoginValid} />
    </Page>
  )
}

export default Login;