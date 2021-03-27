import { client } from './axiosClient';
import { Equipment, EquipmentResponse } from '../models/Equipment';

const equipmentUrl = '/equipment'

export const createEquipment = async (values: Equipment): Promise<EquipmentResponse[]> =>
  client.post(equipmentUrl, values).then(res => res.data);