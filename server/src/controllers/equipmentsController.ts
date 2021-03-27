import {
  Body,
  Controller,
  Post,
  Route,
  SuccessResponse,
} from 'tsoa';
import { EquipmentRequest } from '../models/Equipment';
import { EquipmentsService } from '../services/equipmentsService';

@Route('equipments')
export class ProductsController extends Controller {
  private service = new EquipmentsService();

  @SuccessResponse('200', 'Created')
  @Post()
  public async createProduct(@Body() equipment: EquipmentRequest): Promise<void> {
    this.setStatus(200);
    return this.service.createItem(equipment);
  }
}
