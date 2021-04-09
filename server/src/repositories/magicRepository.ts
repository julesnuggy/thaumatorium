import {
  MagicResponse,
  MagicRequest,
} from '../models/Magic';
import { promisePool } from '../db'

export class MagicRepository {
  public getMagic = async (): Promise<MagicResponse[]> => {
    const [rows] = await promisePool.query('SELECT * FROM magic;')
    return rows as MagicResponse[];
  }

  public createMagic = async (params: MagicRequest): Promise<void> => {
    const {
      title,
      description,
      type,
      magicType,
      imageName,
      stock,
    } = params;

    await promisePool.query(
      'INSERT INTO magic (title, description, type, magicType, imageName, stock) VALUES (?, ?, ?, ?, ?, ?)',
      [
        title,
        description,
        type,
        magicType,
        imageName,
        stock,
      ])
      .then(() => console.log('Added new magic to database!'))
      .catch(err => console.error(err));
  }
}
