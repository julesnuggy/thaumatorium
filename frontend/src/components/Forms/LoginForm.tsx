import React from "react";
import { Field, Form, Formik } from "formik";
import { UserLoginFormValues } from "../../models/User";

import styles from './forms-common.module.scss';

type FormProps = {
  onSubmit: (values: UserLoginFormValues) => void;
}

export const LoginForm = ({ onSubmit }: FormProps) => {
  const usernameRef = React.createRef();
  const passwordRef = React.createRef();
  const initialValues: UserLoginFormValues = ({ username: '', password: '' });

  const handleSubmit = async (values: UserLoginFormValues, { resetForm }) => {
    await onSubmit(values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {() => (
        <Form className={styles.form} title="Login" name="login">
          <b>Login as User</b>
          <div className={styles.formItem}>
            <label htmlFor="username">Username</label>
            <Field name="username" title="username" innerRef={usernameRef} />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="password">Password</label>
            <Field name="password" title="password" innerRef={passwordRef} />
          </div>
          <div className={styles.formSubmit}>
            <button type="submit">Login</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
