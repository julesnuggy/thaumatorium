import React from 'react';

import { LoginForm } from '../components/Forms/LoginForm';
import Page from '../components/Page/Page';
import { userApis } from '../services/servatorium';
import { UserLoginFormValues } from '../models/User';

const Login = () => {
  const onSubmit = async (values: UserLoginFormValues) => {
    await userApis.authenticateUser(values);
  }

  return (
    <Page title="Login">
      <LoginForm onSubmit={onSubmit} />
    </Page>
  )
}

export default Login;