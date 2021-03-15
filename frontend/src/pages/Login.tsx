import React, { useState } from 'react';

import { LoginForm } from '../components/Forms/LoginForm';
import Page from '../components/Page/Page';
import { userApis } from '../services/servatorium';
import { UserLoginFormValues } from '../models/User';

const Login = () => {
  const [isLoginValid, setIsLoginValid] = useState<boolean>();

  const onSubmit = async (values: UserLoginFormValues) => {
    const authRes = await userApis.authenticateUser(values);
    setIsLoginValid(authRes);
  }

  return (
    <Page title="Login">
      <LoginForm onSubmit={onSubmit} isLoginValid={isLoginValid} />
    </Page>
  )
}

export default Login;