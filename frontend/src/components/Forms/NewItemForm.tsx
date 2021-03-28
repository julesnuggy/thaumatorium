import React from 'react';
import {
  Field,
  Form,
  Formik, 
} from 'formik';
import { Item } from '../../models/Item';

import styles from './forms-common.module.scss';

type FormProps = {
  onSubmit: (values: Item) => void;
}

export const NewItemForm = ({ onSubmit }: FormProps): React.FC => {
  const titleRef = React.createRef();
  const initialValues: Item = ({
    title: '',
    description: '',
    type: 'ITEM',
    itemType: '',
    imageName: '',
    stock: 0, 
  });

  const handleSubmit = async (values: Item, { resetForm }) => {
    await onSubmit(values);
    resetForm();
    titleRef.current?.focus();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {() => (
        <Form className={styles.form} title="Add New Item" name="newItem">
          <b>Add New Item</b>
          <div className={styles.formItem}>
            <label htmlFor="title">Title</label>
            <Field name="title" title="title" innerRef={titleRef} />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="description">Description</label>
            <Field name="description" title="Description" />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="itemType">Type</label>
            <Field name="itemType" title="Type" />
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
            <button type="submit">Submit New Item</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
