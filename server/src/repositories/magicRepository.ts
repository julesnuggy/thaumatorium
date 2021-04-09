import { MagicResponse } from '../models/Magic';
import { promisePool } from '../db'

export class MagicRepository {
  public getMagic = async (): Promise<MagicResponse[]> => {
    const [rows] = await promisePool.query('SELECT * FROM magic;')
    return rows as MagicResponse[];
  }
}
