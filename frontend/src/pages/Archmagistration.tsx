import React, { useCallback } from "react";
import { Formik } from 'formik';

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

  const initialValues: Product = ({ title: '', description: '', imageName: '', stock: 0 })

  return (
    <Page title="Archmagistration">
      <Formik
        initialValues={initialValues}
        onSubmit={((values: Product) => callCreateProduct(values))}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
          <form className={styles.productForm} title="Add New Product" name="newProduct" onSubmit={handleSubmit}>
            <b>Add New Product</b>
            <div className={styles.formItem}>
              <label htmlFor="title">Title</label>
              <input name="title" title="title" onChange={handleChange} onBlur={handleBlur} value={values.title} />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="description">Description</label>
              <input name="description" title="Description" onChange={handleChange} onBlur={handleBlur} value={values.description} />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="imageName">Image Name</label>
              <input name="imageName" title="Image Name" onChange={handleChange} onBlur={handleBlur} value={values.imageName} />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="stock">Stock</label>
              <input name="stock" title="Stock" onChange={handleChange} onBlur={handleBlur} value={values.stock} />
            </div>
            <div className={styles.formSubmit}>
              <button type="submit">Submit New Product</button>
            </div>
          </form>
        )}
      </Formik>
    </Page>
  )
}

export default Archmagistration;