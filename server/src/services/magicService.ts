import {
  MagicRequest,
  MagicResponse, 
} from '../models/Magic';
import { MagicRepository } from '../repositories/magicRepository';

export class MagicService {
  private repository = new MagicRepository();

  public getMagic = async (): Promise<MagicResponse[]> => {
    return this.repository.getMagic();
  }

  public createMagic = async (params: MagicRequest): Promise<void> => {
    return this.repository.createMagic(params);
  }
}