import React, {
  useCallback,
  useEffect, 
} from 'react';

import Page from '../components/Page/Page';
import ProductCard from '../components/ProductCard/ProductCard';
import { itemApis } from '../services/servatorium';
import { useRequestState } from '../utils/hooksUtils';

import styles from './common.module.scss';

type Props = {
  isLoggedIn: boolean;
}

const useItemsRequests = () => {
  const getItemsData = useCallback(() => itemApis.getItems(), []);
  const deleteItemsData = useCallback((params) => itemApis.deleteItem(params), []);
  const {
    loading,
    data,
    error,
    call,
  } = useRequestState(getItemsData)

  const {
    success: deleteItemSuccess,
    error: deleteItemError,
    call: deleteItemCall,
  } = useRequestState(deleteItemsData);

  useEffect(() => {
    call();
  }, [call, deleteItemSuccess])

  return {
    loading,
    data,
    error,
    deleteItemSuccess,
    deleteItemError,
    deleteItemCall,
  };
}

const Items = ({ isLoggedIn }: Props): React.FC => {
  const {
    data,
    deleteItemSuccess,
    deleteItemError,
    deleteItemCall,
  } = useItemsRequests();

  return (
    <Page title="Items">
      <div className={styles.container}>
        {data?.map((item, idx) => (
          <ProductCard
            key={`${item.title}_${idx}`}
            id={item.id}
            title={item.title}
            imageName={item.imageName}
            description={item.description}
            productType={item.type}
            type={item.itemType}
            stock={item.stock}
            isLoggedIn={isLoggedIn}
            onDeleteClick={deleteItemCall}
          />
        ))}
      </div>
    </Page>
  );
}

export default Items;