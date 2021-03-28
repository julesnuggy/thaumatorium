import React, { useCallback, useEffect } from 'react';

import Page from "../components/Page/Page";
import { equipmentApis } from '../services/servatorium';
import { useRequestState } from '../utils/hooksUtils';

import styles from './common.module.scss';

const useEquipmentRequests = () => {
  const getEquipment = useCallback(() => equipmentApis.getEquipment(), []);
  const { loading, data, error, call } = useRequestState(getEquipment);

  useEffect(() => {
    call()
  }, [call]);

  return {
    loading,
    data,
    error,
    call
  };
}

const EquipmentCard = ({data}: any) => (
  <div>
    <p>{data.title}</p>
    <p>{data.description}</p>
  </div>
)

const Equipment = () => {
  const { data } = useEquipmentRequests();

  return (
    <Page title="Equipment">
      <div className={styles.container}>
        {data?.map((equipment) => <EquipmentCard data={equipment}/>)}
      </div>
    </Page>
  );
}

export default Equipment;