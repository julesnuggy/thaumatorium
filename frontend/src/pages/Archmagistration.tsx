import React, { useCallback } from "react";
import { Formik, Form, Field } from 'formik';

import Page from '../components/Page/Page';
import { Product } from "../models/Product";
import { createProduct } from "../services/servatorium";
import { useRequestState } from "../utils/hooksUtils";

import styles from './Archmagistration.module.scss'

const useProductsRequests = () => {
  const callCreateProduct = useCallback((product: Product) =>  createProduct(product), []);
  const { loading, data, error } = useRequestState(callCreateProduct)

  return {
    callCreateProduct,
    loading,
    data,
    error
  };
}

const Archmagistration = () => {
  const { callCreateProduct } = useProductsRequests();
  const titleRef = React.createRef();
  const initialValues: Product = ({ title: '', description: '', imageName: '', stock: 0 })

  const handleSubmit = async (values: Product, { resetForm }) => {
    await callCreateProduct(values);
    resetForm();
    titleRef.current?.focus();
  }

  return (
    <Page title="Archmagistration">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form className={styles.productForm} title="Add New Product" name="newProduct">
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
    </Page>
  )
}

export default Archmagistration;