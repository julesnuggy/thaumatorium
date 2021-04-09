import {
  Controller,
  Get,
  Route,
} from 'tsoa';
import { MagicResponse } from '../models/Magic';
import { MagicService } from '../services/magicService';

@Route('magic')
export class MagicController extends Controller {
  private service = new MagicService();

  @Get()
  public async getMagic(): Promise<MagicResponse[]> {
    return this.service.getMagic();
  }
}