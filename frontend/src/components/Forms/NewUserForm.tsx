import React from 'react';
import {
  Field,
  Form,
  Formik, 
} from 'formik';
import {
  User,
  UserFormValues, 
} from '../../models/User';

import styles from './forms-common.module.scss';

type FormProps = {
  onSubmit: (values: User) => void;
}

export const NewUserForm = ({ onSubmit }: FormProps): React.FC => {
  const usernameRef = React.createRef();
  const passwordRef = React.createRef();
  const initialValues: UserFormValues = ({
    username: '',
    password: '',
    passwordConfirmation: '', 
  });

  const handleSubmit = async (values: UserFormValues, { resetForm }) => {
    const {
      username,
      password,
      passwordConfirmation,
    } = values;

    if (password !== passwordConfirmation) {
      alert('Passwords do not match!');
      return passwordRef.current?.select();
    }

    const newUser: User = {
      username,
      password,
    };

    await onSubmit(newUser);
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
            <Field name="password" title="password" innerRef={passwordRef} />
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
