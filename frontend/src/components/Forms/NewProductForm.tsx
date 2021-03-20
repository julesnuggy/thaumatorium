import React from "react";
import { Field, Form, Formik } from "formik";
import { Product } from "../../models/Product";

import styles from './forms-common.module.scss';

type FormProps = {
  onSubmit: (values: Product) => void;
}

export const NewProductForm = ({ onSubmit }: FormProps) => {
  const titleRef = React.createRef();
  const initialValues: Product = ({ title: '', description: '', imageName: '', stock: 0 });

  const handleSubmit = async (values: Product, { resetForm }) => {
    await onSubmit(values);
    resetForm();
    titleRef.current?.focus();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {() => (
        <Form className={styles.form} title="Add New Product" name="newProduct">
          <b>Add New Product</b>
          <div className={styles.formItem}>
            <label htmlFor="title">Title</label>
            <Field name="title" title="title" innerRef={titleRef} />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="description">Description</label>
            <Field name="description" title="Description" />
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
            <button type="submit">Submit New Product</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
