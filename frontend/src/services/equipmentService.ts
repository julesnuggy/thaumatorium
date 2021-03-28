import { client } from './axiosClient';
import { Equipment, EquipmentResponse } from '../models/Equipment';

const equipmentUrl = '/equipment'

export const getEquipment = async (): Promise<EquipmentResponse[]> => client.get(equipmentUrl).then(res => res.data);

export const createEquipment = async (values: Equipment): Promise<void> =>
  client.post(equipmentUrl, values).then(res => res.data);