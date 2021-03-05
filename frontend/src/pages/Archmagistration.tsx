import React, { useCallback } from "react";

import Page from '../components/Page/Page';
import { Product } from "../models/Product";
import { createProduct } from "../services/servatorium";
import { useRequestState } from "../utils/hooksUtils";
import { NewProductForm } from "../components/Forms/NewProductForm";

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

  const onSubmitProduct = async (values: Product, { resetForm }) => {
    await callCreateProduct(values);
    resetForm();
  }

  return (
    <Page title="Archmagistration">
      <NewProductForm onSubmit={onSubmitProduct} />
    </Page>
  )
}

export default Archmagistration;