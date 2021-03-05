import React, { useCallback } from "react";

import Page from '../components/Page/Page';
import { Product } from "../models/Product";
import { productApis } from "../services/servatorium";
import { useRequestState } from "../utils/hooksUtils";
import { NewProductForm } from "../components/Forms/NewProductForm";
import { NewUserForm } from "../components/Forms/NewUserForm";

const useProductsRequests = () => {
  const callCreateProduct = useCallback((product: Product) =>  productApis.createProduct(product), []);
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

  const onSubmitUser = async () => {};

  const onSubmitProduct = async (values: Product) => {
    await callCreateProduct(values);
  }

  return (
    <Page title="Archmagistration">
      <NewUserForm onSubmit={onSubmitUser} />
      <hr />
      <NewProductForm onSubmit={onSubmitProduct} />
    </Page>
  )
}

export default Archmagistration;