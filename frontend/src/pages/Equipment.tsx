import React, {
  useCallback,
  useEffect, 
} from 'react';

import Page from '../components/Page/Page';
import ProductCard from '../components/ProductCard/ProductCard';
import { equipmentApis } from '../services/servatorium';
import { useRequestState } from '../utils/hooksUtils';

import styles from './common.module.scss';

const useEquipmentRequests = () => {
  const getEquipment = useCallback(() => equipmentApis.getEquipment(), []);
  const {
    loading,
    data,
    error,
    call,
  } = useRequestState(getEquipment);

  useEffect(() => {
    call()
  }, [call]);

  return {
    loading,
    data,
    error,
    call,
  };
}

const Equipment = (): React.FC => {
  const { data } = useEquipmentRequests();

  return (
    <Page title="Equipment">
      <div className={styles.container}>
        {data?.map((equipment, idx) =>
          <ProductCard
            key={`${equipment.title}_${idx}`}
            title={equipment.title}
            imageName={equipment.imageName}
            description={equipment.description}
            type={equipment.equipmentType}
            stock={equipment.stock}
          />
        )}
      </div>
    </Page>
  );
}

export default Equipment;