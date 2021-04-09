import React, { useCallback, useEffect } from 'react';

import Page from '../components/Page/Page';
import ProductCard from '../components/ProductCard/ProductCard';
import { magicApis } from '../services/servatorium';
import { useRequestState } from '../utils/hooksUtils';

import styles from './common.module.scss';

const useMagicRequests = () => {
  const getMagicData = useCallback(() => magicApis.getMagic(), []);
  const {
    loading,
    data,
    error,
    call,
  } = useRequestState(getMagicData);

  useEffect(() => {
    call();
  }, [call]);

  return {
    loading,
    data,
    error,
  }
}

const Magic = (): React.FC => {
  const { data } = useMagicRequests();

  return (
    <Page title="Magic">
      <div className={styles.container}>
        {data?.map((magic, idx) => (
          <ProductCard
            key={`${magic.title}_${idx}`}
            title={magic.title}
            imageName={magic.imageName}
            description={magic.description}
            type={magic.magicType}
            stock={magic.stock}
          />
        ))}
      </div>
    </Page>
  );
}

export default Magic;