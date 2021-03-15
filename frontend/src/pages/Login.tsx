import React from 'react';

import { LoginForm } from '../components/Forms/LoginForm';
import Page from '../components/Page/Page';

const Login = () => {
  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <Page title="Login">
      <LoginForm onSubmit={onSubmit} />
    </Page>
  )
}

export default Login;