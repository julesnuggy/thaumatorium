import {
  Body,
  Controller,
  Get,
  Post,
  Route,
  SuccessResponse,
} from 'tsoa';
import {
  MagicRequest,
  MagicResponse, 
} from '../models/Magic';
import { MagicService } from '../services/magicService';

@Route('magic')
export class MagicController extends Controller {
  private service = new MagicService();

  @Get()
  public async getMagic(): Promise<MagicResponse[]> {
    return this.service.getMagic();
  }

  @SuccessResponse('200', 'Created')
  @Post()
  public async createMagic(@Body() magic: MagicRequest): Promise<void> {
    this.setStatus (200);
    return this.service.createMagic(magic);
  }
}