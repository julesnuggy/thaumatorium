import {
  useCallback,
  useEffect, 
} from 'react';

import { Equipment } from '../models/Equipment';
import { Item } from '../models/Item';
import { User } from '../models/User';
import { Magic } from '../models/Magic';
import {
  equipmentApis,
  itemApis,
  userApis,
  magicApis,
} from '../services/servatorium';

import { useRequestState } from './hooksUtils';

const useItemsRequests = () => {
  const callCreateItem = useCallback((item: Item) => itemApis.createItem(item), []);
  const {
    loading,
    data,
    error,
  } = useRequestState(callCreateItem);

  return {
    callCreateItem,
    loading,
    data,
    error,
  };
}

const useEquipmentRequests = () => {
  const createEquipment = useCallback(
    (equipment: Equipment) => equipmentApis.createEquipment(equipment),
    [])
  const {
    loading, error: createEquipmentError, success: createEquipmentSuccess, call: callCreateEquipment,
  } = useRequestState(createEquipment);

  return {
    callCreateEquipment,
    loading,
    createEquipmentError,
    createEquipmentSuccess,
  }
}

const useUsersRequests = () => {
  const callCreateUser = useCallback((user: User) => userApis.createUser(user), []);
  const getUsers = useCallback(() => userApis.getUsers(), []);
  const callGetUserByUsername = useCallback((username: string) => userApis.getUserByUsername(username), []);
  const {
    loading: createUserLoading, data: newUser, error: createUserError,
  } = useRequestState(callCreateUser);
  const {
    loading: getUsersLoading, data: users, error: getUsersError, call: callGetUsers,
  } = useRequestState(getUsers);

  useEffect(() => {
    callGetUsers();
  }, [callGetUsers])

  return {
    callCreateUser,
    callGetUsers,
    callGetUserByUsername,
    createUserLoading,
    newUser,
    createUserError,
    getUsersLoading,
    users,
    getUsersError,
  };
}

const useMagicRequests = () => {
  const createMagic = useCallback((magic: Magic) => magicApis.createMagic(magic), []);
  const {
    loading: createMagicLoading,
    error: createMagicError,
    success: createMagicSuccess,
    call: callCreateMagic,
  } = useRequestState(createMagic);

  return {
    createMagicLoading,
    createMagicError,
    createMagicSuccess,
    callCreateMagic,
  };
}

export const useArchmagistrationRequests = () => ({
  useEquipmentRequests,
  useItemsRequests,
  useUsersRequests,
  useMagicRequests,
});
