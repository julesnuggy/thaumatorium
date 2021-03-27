import React, { useCallback, useEffect } from 'react';

import Page from '../components/Page/Page';
import Item from '../components/Item/Item';
import { itemApis } from '../services/servatorium';
import { useRequestState } from '../utils/hooksUtils';

import styles from './Items.module.scss';

const useItemsRequests = () => {
  const getItemsData = useCallback(() =>  itemApis.getItems(), []);
  const { loading, data, error, call } = useRequestState(getItemsData)

  useEffect(() => {
    call();
  }, [call])

  return { loading, data, error };
}

const Items = () => {
  const { data } = useItemsRequests();
  return (
    <Page title="Items">
      <div className={styles.itemsContainer}>
        {data?.map((item, idx) => (
          <Item
            key={`${item.title}_${idx}`}
            title={item.title}
            imageName={item.imageName}
            description={item.description}
            type={item.type}
            stock={item.stock}
          />
        ))}
      </div>
    </Page>
  );
}

export default Items;