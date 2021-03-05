import React from "react";
import { Field, Form, Formik } from "formik";
import { User } from "../../models/User";

import styles from './forms-common.module.scss';

type FormProps = {
  onSubmit: (values: User) => void;
}

export const NewUserForm = ({ onSubmit }: FormProps) => {
  const usernameRef = React.createRef();
  const initialValues: User = ({ username: '', password: '' });

  const handleSubmit = async (values: User, { resetForm }) => {
    await onSubmit(values);
    resetForm();
    usernameRef.current?.focus();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {() => (
        <Form className={styles.form} title="Create New User" name="newUser">
          <b>Create New User</b>
          <div className={styles.formItem}>
            <label htmlFor="username">Username</label>
            <Field name="username" title="username" innerRef={usernameRef} />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="password">Password</label>
            <Field name="password" title="password" />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="passwordConfirmation">Confirm Password</label>
            <Field name="passwordConfirmation" title="passwordConfirmation" />
          </div>
          <div className={styles.formSubmit}>
            <button type="submit">Submit New User</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
