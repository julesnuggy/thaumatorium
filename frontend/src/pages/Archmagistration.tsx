import React from 'react';

import Page from '../components/Page/Page';

import styles from './Archmagistration.module.scss'

const Archmagistration = () => {
  return (
    <Page title="Archmagistration">
      <div>
        <form className={styles.productForm} title="Add New Product" name="newProduct">
          <b>Add New Product</b>
          <div className={styles.formItem}>
            <label htmlFor="name">Name</label>
            <input name="name" title="Name" />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="description">Description</label>
            <input name="description" title="Description" />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="imageName">Image Name</label>
            <input name="imageName" title="Image Name" />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="stock">Stock</label>
            <input name="stock" title="Stock" />
          </div>
          <div className={styles.formSubmit}>
            <button type="submit">Submit New Product</button>
          </div>
        </form>
      </div>
    </Page>
  )
}

export default Archmagistration;