import React, {
  useCallback,
  useEffect, 
} from 'react';

import Page from '../components/Page/Page';
import ProductCard from '../components/ProductCard/ProductCard';
import { itemApis } from '../services/servatorium';
import { useRequestState } from '../utils/hooksUtils';

import styles from './common.module.scss';

const useItemsRequests = () => {
  const getItemsData = useCallback(() => itemApis.getItems(), []);
  const {
    loading,
    data,
    error,
    call,
  } = useRequestState(getItemsData)

  useEffect(() => {
    call();
  }, [call])

  return {
    loading,
    data,
    error, 
  };
}

const Items = (): React.FC => {
  const { data } = useItemsRequests();
  return (
    <Page title="Items">
      <div className={styles.container}>
        {data?.map((item, idx) => (
          <ProductCard
            key={`${item.title}_${idx}`}
            title={item.title}
            imageName={item.imageName}
            description={item.description}
            productType={item.type}
            type={item.itemType}
            stock={item.stock}
          />
        ))}
      </div>
    </Page>
  );
}

export default Items;