import React, { useCallback, useEffect } from "react";

import Page from "../components/Page/Page";
import Product from "../components/Product/Product";
import { productApis } from "../services/servatorium";
import { useRequestState } from "../utils/hooksUtils";

import styles from './Items.module.scss';

const useProductsRequests = () => {
  const getProductsData = useCallback(() =>  productApis.getProducts(), []);
  const { loading, data, error, call } = useRequestState(getProductsData)

  useEffect(() => {
    call();
  }, [call])

  return { loading, data, error };
}

const Items = () => {
  const { data } = useProductsRequests();
  return (
    <Page title="Items">
      <div className={styles.productsContainer}>
        {data?.map((product, idx) => (
          <Product
            key={`${product.title}_${idx}`}
            title={product.title}
            imageName={product.imageName}
            description={product.description}
            stock={product.stock}
          />
        ))}
      </div>
    </Page>
  );
}

export default Items;