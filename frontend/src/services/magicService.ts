import { client } from './axiosClient';
import { Magic, MagicResponse } from '../models/Magic';

export const magicUrl = '/magic';

export const getMagic = async (): Promise<MagicResponse[]> => client.get(magicUrl).then(res => res.data);

export const createMagic = async (magic: Magic): Promise<void> =>
  client.post(magicUrl, magic).then(res => res.data);