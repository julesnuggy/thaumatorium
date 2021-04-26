import React from 'react';
import {
  Field,
  Form,
  Formik,
} from 'formik';

import { Magic } from '../../models/Magic';
import { ProductType } from '../../enums/products';

import styles from './forms-common.module.scss';

type FormProps = {
  onSubmit: (values: Magic) => void;
  error: boolean;
  success: boolean;
}

export const NewMagicForm = ({
  onSubmit,
  error,
  success,
}: FormProps): React.FC => {
  const titleRef = React.createRef();
  const initialValues: Magic = ({
    title: '',
    description: '',
    type: ProductType.MAGIC,
    magicType: '',
    imageName: '',
    stock: 0,
  });

  const handleSubmit = async (values: Magic, { resetForm }) => {
    await onSubmit(values);
    resetForm();
    titleRef.current?.focus();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {() => (
        <Form className={styles.form} title="Add New Magic" name="newMagic">
          <b>Add New Magic</b>
          {error && <div className={styles.error}>Error creating new magic...</div>}
          {success && <div className={styles.success}>Successfully created new magic!</div>}
          <div className={styles.formItem}>
            <label htmlFor="title">Title</label>
            <Field name="title" title="title" innerRef={titleRef} />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="description">Description</label>
            <Field name="description" title="Description" />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="magicType">Type</label>
            <Field name="magicType" title="Type" />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="imageName">Image Name</label>
            <Field name="imageName" title="Image Name" />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="stock">Stock</label>
            <Field name="stock" title="Stock" />
          </div>
          <div className={styles.formSubmit}>
            <button type="submit">Submit New Magic</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
